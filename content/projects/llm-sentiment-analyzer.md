---
title: "LLM Sentiment Analyzer"
date: "2025-01-10"
description: "A Python library for evaluating LLM performance on sentiment analysis tasks. Supports text and image inputs with async processing and comprehensive metrics."
tags: ["Natural Language Processing", "Computer Vision", "LLM Evaluation"]
technologies: ["Python", "LiteLLM", "vLLM", "AsyncIO", "PyTorch"]
category: "AI"
thumbnailUrl: "/images/sentiment_analyzer_thumb.png"
repoUrl: "https://github.com/caljoseph/llm-sentiment-analyzer"
---

## Project Overview

I originally built this for a research project where we needed to systematically evaluate how well different language models could predict sentiment ratings for a massive dataset of Amazon reviews.

Turns out, getting consistent, comparable results across dozens of different LLM providers is trickier than it sounds. Each has different APIs, rate limits, response formats, and quirks.

Along the way, I added support for vision models because, honestly, I was curious whether multimodal LLMs could rate meme sentiment as well as they handle text reviews. Spoiler: they can, and it's pretty entertaining.

---

## 🎯 The Problem

Evaluating LLMs on sentiment tasks sounds straightforward until you want to test more than just OpenAI models. You end up dealing with:

- **Provider chaos**: Every company has different API formats, authentication, and rate limits
- **Local vs cloud**: Completely different connection patterns for hosted vs self-served models
- **Result tracking**: Managing experiments across dozens of model combinations
- **Batch processing**: Staying efficient while respecting each provider's constraints

---

## 🔧 Technical Design

**LiteLLM as the Universal Adapter**

I nearly cried with joy when I found out that LiteLLM exists, I initially thought I might have to do all the heavy lifting here. Instead of writing separate clients for every provider, I used LiteLLM as a universal translation layer. It handles the API differences between OpenAI's format, Anthropic's format, Google's format, and 100+ other providers, then converts everything to a consistent response structure.

```python
# Same code works for any provider
result = await model_manager.evaluate_single(
    content="Great product!",
    model_name="gpt-4"  # or "claude-3-haiku", "gemini-pro", "mistral-large"
)
```

**Async-First Architecture**

Everything is built around async/await from the ground up. The ModelManager handles concurrent requests with proper rate limiting and exponential backoff. The Evaluator processes batches in parallel while respecting each provider's API constraints. This made the difference between hour-long evaluation runs and minutes.

**vLLM Integration**

For local models, I integrated with vLLM's OpenAI-compatible server. This is very convenient. I can spin up any Hugging Face model on my GPU and evaluate it using the exact same code path as cloud providers.

**Multi-modal Pipeline**

Adding vision support meant rethinking the data flow. The DataProcessor now handles both text content and image paths. Vision models get base64-encoded images, while text models get plain strings. The evaluation metrics work the same either way.

---

## 📊 Results & Learnings

**Performance**

With proper async batching, I can evaluate 1000 reviews in under 2 minutes using most cloud providers. Local models with vLLM are even faster if you have the GPU memory, plus you're not paying per token.

**Model Insights**

The largest and most recent models consistently outperform smaller models on sentiment accuracy. Recent smaller models like Llama-3 7B do surprisingly well on obvious cases, but struggle with sarcasm and nuanced sentiment.

**Vision Models**

This was the fun experiment—can vision models rate meme sentiment? GPT-4.1 and Claude-4  do quite well, especially on clearly positive/negative visual content. 

---

## 🧠 What I Learned

- **Provider Abstraction**: LiteLLM's universal API is genuinely useful for research code—it eliminated hundreds of lines of provider-specific logic
- **Async Python**: Building everything async-first from the start saves massive refactoring later
- **Model Serving**: vLLM's OpenAI compatibility makes local deployment much simpler than custom inference servers
- **Evaluation Methodology**: Consistent prompting and result tracking matter more than I thought, especially when comparing across providers
- **Infrastructure**: Running evaluations at scale requires thinking about rate limits, retries, and result persistence for every provider

This project scratched a specific research itch, but it ended up being a solid foundation for any LLM evaluation work across the entire ecosystem. The modular design means I can easily add new evaluation metrics or data formats as LiteLLM adds support for new providers.

Plus, I learned that building good research tools that work across the whole LLM landscape is almost as satisfying as the research itself.