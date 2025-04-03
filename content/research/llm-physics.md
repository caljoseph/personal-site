---
title: "Designing a Physics Prediction Task for Evaluating LLM Reasoning"
date: "2025-04-02"
description: "A research project introducing a novel physics prediction benchmark for large language models"
tags: ["LLMs", "Evaluation", "Physics", "Calibration", "Machine Learning"]
authors: ["Caleb Bradshaw"]
advisor: "Dr. Sean Warnick"
venue: ""
status: "Ongoing"
type: "Experiment"
thumbnailUrl: "/images/project-placeholder.jpg"
---

# Designing a Physics Prediction Task for Evaluating LLM Reasoning

## Research Summary

This project introduces a new benchmark task for evaluating large language models (LLMs) on physics prediction problems. The task is designed to probe model reasoning by requiring predictions of integer-valued answers to physics questions. Rather than only evaluating accuracy, we analyze the model's full output distribution (logits) to assess calibration, consistency, and confidence.

## Motivation

LLMs like GPT-4 can answer complex questions across a range of domains, but traditional benchmarks often reduce their output to a binary correctness metric. This hides critical information about the model’s internal uncertainty and reasoning consistency.

Physics problems offer a structured yet diverse domain where grounded reasoning and precise numerical prediction are required. By building a benchmark of physics tasks with well-defined, discrete numerical outputs, we can use LLM output logits to better understand model behavior under uncertainty.

## Key Research Questions

1. How well-calibrated are LLMs when making discrete numerical predictions in physics?
2. Do LLMs exhibit consistent reasoning patterns when presented with physics problems of varying difficulty?
3. Can we measure confidence directly from the model’s logits, and does this confidence correlate with correctness?
4. How do different model families (e.g., GPT, Claude, Mistral) compare on this benchmark?
5. How does prompting style or few-shot context affect the model's confidence and calibration?

## Methodology

### Task Design

- Constructed a set of short-form physics questions that require integer answers (e.g., energy, velocity, force).
- Topics range from Newtonian mechanics to electromagnetism, using high-school and early undergraduate material.
- Answers are bounded within a reasonable integer range (e.g. 0–99) to facilitate logits-based evaluation.

### Logit Extraction

- Used OpenAI API to extract raw logits over all tokens, mapping model confidence to integer answers.
- Defined custom decoders to interpret logits as distributions over integer values.
- Normalized these distributions to compute softmax probabilities and assess calibration.

### Evaluation Metrics

- **Calibration Error**: Expected calibration error (ECE) between predicted confidence and accuracy.
- **Entropy and Sharpness**: Measures of certainty and distributional spread.
- **Consistency Score**: Evaluating output stability across rephrased or slightly altered questions.
- **Rank-based Accuracy**: Top-k correctness using ranked output probabilities.
- **Comparative Analysis**: Cross-model and cross-prompt comparisons.

## Preliminary Results

- Models like GPT-4 show high top-1 accuracy on basic kinematics but reduced calibration on multi-step force problems.
- Confidence often overestimates correctness, with ECE around 15% on harder items.
- Model predictions vary significantly with small prompt changes, revealing reasoning instability.
- Some models assign high probability mass to physically implausible answers, suggesting gaps in grounded reasoning.

## Applications

- **LLM Evaluation**: Offers a new framework for benchmarking model reasoning beyond simple QA tasks.
- **AI Safety**: Helps identify cases where models are confidently wrong.
- **Educational AI**: Could inform development of tutoring systems with better uncertainty awareness.
- **Interpretability Research**: Enables fine-grained analysis of model output distributions in numeric domains.

## Current Work

1. **Dataset Expansion**: Scaling the task set with more diverse physics concepts and difficulty levels.
2. **Prompt Engineering**: Testing structured prompts, scratchpad reasoning, and chain-of-thought effects on calibration.
3. **Cross-Model Benchmarking**: Systematic evaluation across Claude, GPT-4, Gemini, and open-source models.
4. **Confidence Visualization**: Creating tools to plot output distributions and confidence trajectories.
5. **Paper Preparation**: Drafting a conference paper on benchmark design and evaluation findings.

## Future Directions

- Extend benchmark to symbolic reasoning tasks (e.g. algebraic manipulation) with numeric outputs.
- Combine physics simulation engines to generate grounded problem instances.
- Investigate fine-tuning or post-hoc calibration techniques for improving confidence accuracy.
- Release the benchmark as an open-source toolkit for reproducible evaluation.

## Acknowledgments

This research is conducted in the Machine Learning and Systems Lab at BYU, with support from lab peers and infrastructure resources provided by the BYU College of Physical and Mathematical Sciences.
