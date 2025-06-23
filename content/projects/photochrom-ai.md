---
title: "PhotochromAI"
date: "2025-01-06"
description: "A U-Net neural network that colorizes black-and-white photos in the style of 1890s photochrom prints. Trained on Library of Congress archives using university HPC resources."
tags: ["Computer Vision", "Deep Learning", "HPC"]
technologies: ["PyTorch", "PyTorch Lightning", "Hydra", "Weights & Biases", "SLURM"]
category: "AI"
thumbnailUrl: "/images/example_photochrom.jpg"
repoUrl: "https://github.com/caljoseph/photochrom-ai"
---
## Project Overview

In the late 19th and early 20th centuries, printers produced stunning hand-colored travel images known as *photochroms*. These prints—somewhere between a photograph and a painting—offered a colorful look at the world decades before color photography was widely available. Skilled artisans added color to black-and-white photos using lithographic stones, crafting a distinct visual style that was both realistic and dreamlike.

I’ve always loved the look of these images. So I started wondering: could a neural network learn to replicate that aesthetic?

This project became my excuse to dive into computer vision and get hands-on with my university’s high-performance computing cluster. Plus, the Library of Congress has digitized nearly 6,000 of these photochroms—perfect training data.

---

## 🧱 Stack

- **Architecture**: U-Net encoder-decoder with skip connections
- **Framework**: PyTorch Lightning for scalable, clean training loops
- **Configuration**: Hydra for modular experiment configs
- **Tracking**: Weights & Biases for metrics and visual logging
- **Compute**: SLURM job scripts for multi-node HPC training
- **Color Space**: LAB (not RGB) for perceptual accuracy

---

## 🎨 The Dataset

I used the [Library of Congress Photochrom Collection](https://www.loc.gov/pictures/collection/pgz/), which includes high-resolution scans from the Photoglob Company of Zürich and the Detroit Publishing Company. These aren’t amateur colorizations—they were professional, carefully composed prints.

The collection spans:
- Over 6,000 scenes from Europe and the Middle East
- 500+ images from North America
- Alpine landscapes, city centers, and rural life

---

## 🔬 Technical Approach

**U-Net Backbone**  
I used a classic U-Net architecture: an encoder compresses the input grayscale image into feature maps, while a decoder reconstructs a color version. Skip connections preserve detail that would otherwise be lost in the bottleneck.

**LAB Color Space**  
Rather than predicting RGB directly, the model works in LAB space:
- Takes the L (lightness) channel as input
- Predicts the A and B (color) channels
- Recombines them into a full-color image

This improves perceptual consistency and gives the colors a softer, more natural look.

**Training Pipeline**  
PyTorch Lightning abstracted away most of the distributed training complexity. Hydra handled configuration variants cleanly. Weights & Biases logged metrics and sample outputs. It was smooth to scale up and iterate quickly.

---

## 🖥️ HPC Training

This was my first serious experience using BYU's supercomputer. I trained across 4 nodes with 8 NVIDIA H100s each, which meant I had to:

- Write efficient SLURM job scripts
- Think about data pipelines and I/O bottlenecks
- Schedule jobs and resume training from checkpoints
- Monitor everything remotely

Learning the HPC ecosystem gave me a whole new appreciation for real-world ML deployment.

---

## 📊 Results

![Example output - good photochrom style](/images/good_photochrom.png)
![Example output - decent photochrom style](/images/decent_photochrom.png)
![Example output - inaccurate photochrom style](/images/inaccurate_photochrom.png)

Where it *shines*:
- **Landscapes** – hills, lakes, valleys
- **Architecture** – buildings, bridges, street scenes
- **Simpler compositions** – where there's a clear subject/background

Where it *struggles*:
- Fine detail (e.g. faces, small patterns)
- Dense or chaotic scenes
- Out-of-domain objects that don’t resemble the training data

That said, the model consistently outputs images that feel like photochroms—slightly oversaturated, soft-edged, and nostalgic.

---

## 🧠 What I Learned

- **Vision**: How convolutional architectures handle translation tasks like grayscale-to-color
- **Color**: Why LAB space is often superior to RGB for this kind of task
- **HPC**: Everything from job queuing to distributed training on SLURM
- **Reproducibility**: Modular configs, logging, and tracking make iteration easier
- **History**: Honestly, a lot about lithographic printing and early photographic methods

This project isn’t production-ready, but it’s been an interesting technical challenge.