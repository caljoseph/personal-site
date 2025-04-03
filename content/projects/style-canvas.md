---
title: "Style Canvas"
date: "2024-12-30"
description: "A full-stack platform for hosting AI models with on-demand GPU inference, JWT auth, and a simple token system. Built to be fast, scalable, and cheap."
tags: ["Model Deployment", "Web Dev", "AI/ML"]
technologies: ["React", "TypeScript", "NestJS", "AWS-EC2", "AWS-Cognito"]
category: "web"
thumbnailUrl: "/images/style-canvas.png"
liveUrl: "https://stylecanvasai.com"
repoUrl: "https://github.com/caljoseph/style-canvas"
featured: true
---

## Project Overview

Style Canvas is a web app I built to host and run AI style transfer models. A friend reached out with some models he'd trained and wanted a site where users could try them out. It turned into a fun systems project — build a way to serve AI inference jobs on demand and do it fast, scalable and **CHEAP**.

The models aren’t mine (and not really to my taste), but the infrastructure is solid. When I want to serve my own models, I can plug them right in.

---

## 🧱 Stack

- **Frontend**: `React + TypeScript`
- **Backend**: `NestJS`
- **Infra**: `AWS EC2 (GPU)`, `Cognito`, `DynamoDB`, `Stripe`
- **Model server**: Python running on-demand on a GPU instance

---

## 🔐 JWT Auth with Cognito

I used AWS Cognito for account management and session auth. When a user logs in, Cognito returns a JWT that gets stored in `localStorage` and attached to every request.

The backend verifies the token and sets the user's privileges using Cognito’s JWKS and Passport’s `JwtStrategy`:

```ts
super({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKeyProvider: passportJwtSecret({
    jwksUri: `${COGNITO_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: COGNITO_CLIENT_ID,
  issuer: COGNITO_ISSUER,
  algorithms: ['RS256'],
});
```

> Getting this flow working meant learning about JWTs — how they’re signed, verified, and decoded. Debugging it all gave me a solid understanding of a real world auth tool.

---

## ⚙️ On-Demand EC2 Inference

I initially containerized the models and got `Sagemaker` configured, but I quickly realized how expensive this option was going to be. I decided on a simpler method: when a user submits an image, I **spin up a GPU EC2 instance**, send the job to it, and shut it down when it's idle. This keeps costs near zero when no one's using the app and has a surprisingly low cold boot up period (10-15 seconds).

```ts
await exec(`aws ec2 start-instances --instance-ids ${ML_INSTANCE_ID}`);
await this.waitForServerReady();
const ip = await this.getServerIP();
```

Jobs are processed sequentially through a queue. The backend handles EC2 orchestration, checks token balances, and forwards the image to the model server:

```ts
const response = await fetch(`http://${ip}:5000/generate/image`, {
  method: 'POST',
  body: formData,
  headers: formData.getHeaders(),
});
```
---

## 💳 Stripe & Token System

Each user gets some free tokens on signup. Every time they stylize an image, one token is used. If they run out, they can:

- Buy more tokens (one-time purchase)
- Subscribe for unlimited monthly use

Prices are configured in Stripe with metadata that maps to token counts:

```ts
const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
const price = lineItems.data[0].price;
const tokens = parseInt(price.metadata.tokens, 10);
await this.tokensService.adjustTokens(userId, tokens);
```

The backend verifies webhooks to confirm payments:

```ts
event = stripe.webhooks.constructEvent(payload, signature, STRIPE_SECRET);
```

> This was my first time using Stripe webhooks. They're clean, but I had to learn how to bypass body parsing in NestJS just for that one endpoint.

---

## 🖼️ Frontend

The React frontend handles:

- Auth state and JWT storage (via custom `AuthContext`)
- Image upload and model selection
- Polling job status every few seconds
- Showing styled results once they’re ready

```ts
const token = localStorage.getItem('accessToken');
if (token) {
  fetchUserProfile(); // hit /me with the token
}
```

When inference starts, the UI updates with job progress. If the EC2 instance needs to boot, it shows “Warming up…” until the backend is ready.

> Not fancy, but it works. Uploads feel snappy, the polling is reliable, and the state is reactive across login, logout, and retries.

---

## 🧠 What I Learned

- How JWTs actually work — signature validation, token lifetimes, and decoding with JWKS
- How to control EC2 instances via code and design on-demand compute flows
- How to process queued jobs and coordinate with an ML worker over HTTP
- How to use Stripe Checkout and webhooks to grant in-app credits
- How to structure and build a full-stack system that feels cohesive and responsive

---
But overall, it works. When someone uploads a photo and picks a style, a GPU spins up, runs inference, returns the result, and shuts down when it's done. And that feels pretty cool.
