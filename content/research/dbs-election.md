---
title: "LLM Generated Distribution-Based Prediction of US Electoral Results, Part I"
date: "2024-11-04"
description: "This paper introduces Distribution-Based Prediction, a method for interpreting LLM output probabilities as predictive distributions. Applied to US elections, it enables analysis of model bias, prompt noise, and algorithmic fidelity."
tags: ["LLMs", "Elections", "Calibration", "Bias", "Evaluation", "Machine Learning"]
authors: ["Caleb Bradshaw", "Caelen Miller", "Sean Warnick"]
advisor: "Dr. Sean Warnick"
venue: "arXiv"
status: "Preprint"
type: "publication"
thumbnailUrl: "/images/llama-election.png"
featured: true
arxivUrl: "https://arxiv.org/abs/2411.03486"
---

# LLM Generated Distribution-Based Prediction of US Electoral Results, Part I

## Research Summary

This paper proposes *Distribution-Based Prediction*, a novel method for using Large Language Models (LLMs) as predictive tools by analyzing output token probabilities as probability distributions. Instead of relying on silicon sampling (simulating individual personas), this approach treats the model’s output over integer vote shares as a direct reflection of its internal representation of the world. We apply this method to simulate U.S. presidential elections and evaluate bias, prompt noise, and algorithmic fidelity in LLMs.

## Motivation

Traditional approaches like silicon sampling attempt to simulate a population of human responses using demographic prompts. However, this method can introduce stereotype biases and is highly sensitive to prompt phrasing. Instead, we focus on using the model itself as a predictive agent, extracting probabilities directly from its output to forecast real-world outcomes, specifically electoral results.

This approach provides a cleaner, distributional view of what the model “believes” will happen, and allows rigorous comparisons between model output and historical or real-world data.

## Methodology

### Distribution-Based Prediction

- Constructed simple prompts to elicit vote share predictions from LLMs in the form of single integer outputs between 0 and 100.
- Used logits from LLMs to extract a distribution over possible vote shares per state and candidate.
- Avoided persona-based sampling entirely—LLMs act as election predictors, not simulated voters.

### Aggregating State Distributions

- For each state, calculated the probability that a candidate wins by summing over all pairwise outcome probabilities.
- Used these state-level win probabilities to compute national electoral vote distributions.
- Employed generating functions to efficiently calculate the full distribution of electoral college outcomes.

### Electoral Simulation

- Converted state-level win probabilities into electoral college predictions.
- Ran experiments comparing simulated results to real election outcomes in 2020 and projected results for 2024.

## Results

### Algorithmic Fidelity (2020 Benchmark)

- High agreement between predicted and actual state-level vote shares in 2020.
- Average prediction error was less than 0.5% per candidate per state.
- Predicted national electoral outcome matched the actual results.

### 2024 Forecast

- Distributional forecasts for the 2024 Trump vs. Harris matchup show Harris winning in 95% of simulations.
- Predicted electoral college outcome: Harris 303, Trump 235.

### Matchup Simulations

- Simulated hypothetical elections across 2016, 2020, and 2024 for multiple candidate pairs.
- Found consistent model preference toward Democratic candidates, especially in swing states.

## Key Insights

- **Prompt Noise**: Model outputs are highly sensitive to prompt phrasing; distributional evaluation can help quantify this.
- **Bias Detection**: Aggregated distribution comparisons reveal political bias tendencies in model outputs.
- **Model Scale Impact**: Larger models (e.g., LLaMA 3.2 90B) show more realistic distributions than smaller ones.
- **Silicon Sampling Limitations**: Demographic sampling via LLMs often reinforces stereotypes and lacks diversity in output distributions.

## Future Work

- Formalizing algorithmic fidelity metrics across broader prediction tasks.
- Evaluating prompt robustness and prompt ensemble averaging techniques.
- Extending the method to other domains like sports prediction, finance, and weather.
- Creating a public benchmark suite for distribution-based evaluation of LLMs.


## Research Team

- **Caleb Bradshaw**: Lead author, methodology and implementation
- **Caelen Miller**: Experimental analysis and evaluation
- **Dr. Sean Warnick**: Faculty advisor, systems theory and modeling

## Acknowledgments

This research was conducted at Brigham Young University under the mentorship of Dr. Sean Warnick, with computational resources and academic support provided by the Department of Computer Science.
