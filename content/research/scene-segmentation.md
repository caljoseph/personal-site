---
title: "Taking the Derivative of a Story: A Novel Approach to Fiction Scene Segmentation"
date: "2024-11-01"
description: "This paper introduces a new method for scene segmentation in fiction by calculating a 'derivative' over sentence embeddings, using local minima as candidates for scene transitions."
tags: ["Scene Segmentation", "Narrative Analysis", "Embeddings", "NLP"]
authors: ["Michael DeBuse", "Caelen Miller", "Caleb Bradshaw", "Abel Palmer", "Sean Warnick"]
advisor: "Dr. Sean Warnick"
venue: "TACL (under review)"
status: "under review"
type: "publication"
thumbnailUrl: "/images/scene-segmentation.png"
---

# Taking the Derivative of a Story: A Novel Approach to Fiction Scene Segmentation

## Research Summary

This paper presents a novel method for identifying scene transitions in fiction by treating the narrative as a sequence of sentence embeddings. We calculate a “derivative” by measuring changes between adjacent embeddings, then use local minima in the smoothed derivative signal as potential scene boundaries. A neural classifier is trained on annotated scenes to filter out false positives.

## Motivation

Scene segmentation in fiction is a challenging NLP task with low inter-annotator agreement. Existing models often rely on classification or co-reference features, but struggle with generalization. Our approach reframes the task as a structural problem, leveraging embedding dynamics to detect changes in narrative momentum.

## Approach

- **Embedding Derivative**: Compute L2 differences between adjacent sentence embeddings.
- **Smoothing**: Apply Gaussian smoothing to extract trends.
- **Minima Detection**: Use local minima as candidate scene transitions.
- **Classification**: Train a neural network to classify these candidates using surrounding context.
- **Optional GPT-4 Check**: Use prompting to pinpoint scene boundaries within selected text spans.

## Results

- Achieves state-of-the-art accuracy on a 32-story dataset with diverse genres and lengths.
- Outperforms prior baselines on F1 and Pointwise Dissimilarity metrics.
- Shows robust performance across amateur and professional writing, though novel-length texts introduce more variance.

## Research Team

- **Michael DeBuse**, **Caelen Miller**, **Caleb Bradshaw**, **Abel Palmer**
- **Dr. Sean Warnick**: Faculty advisor

## Notes

This paper is currently under review at *Transactions of the Association for Computational Linguistics (TACL)*. A preprint is not available for distribution at this time.
