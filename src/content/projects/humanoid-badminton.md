---
title: "Humanoid Badminton: Learning Dynamic Racket Skills from Limited Human Motion Data"
lang: en
authors:
  - name: Jingzhi Cui
  - name: Zhexiong Wang
  - name: Bangjie Xu
  - name: Pengyu Zhao
  - name: Youyuan Li
  - name: Zhi Su
  - name: Peng Ren
  - name: Mengdi Xu
  - name: Chao Yu
  - name: Yi Wu
  - name: Luyang Wang
  - name: Zhongyu Li
venue: "CoRL 2026"
published: 2026-09-25
description: Learning whole-body racket skills from limited human motion data, enabling a humanoid robot to sustain rallies with forehand, backhand, and dynamic jump returns.
image: /assets/projects/badminton.webp
tags: [Humanoid Robotics, Hierarchical RL, Motion Skills]
link:
  - label: Project
    icon: material-symbols:open-in-new
    value: https://sunlight02.github.io/humanoid-badminton/
  - label: Paper
    icon: material-symbols:description-outline
    value: https://arxiv.org/abs/2609.31840
---

## Overview

Badminton requires a robot to make rapid contact decisions while coordinating racket pose, racket velocity, and whole-body motion. This work learns dynamic humanoid racket skills from limited and imperfect human motion data.

## Method

- **Motion augmentation**: Expands sparse hitting references through task randomization to build a continuous latent skill space.
- **Hierarchical reinforcement learning**: Uses a high-level planner to select skill codes and compose low-level strokes online.
- **Conditional adversarial regularization**: Encourages skill selection consistent with human motion priors while preserving return performance.
- **Real-world deployment**: Demonstrates sustained human-robot rallies with forehand, backhand, and dynamic jump returns.

## Paper and Demo

[Project website and demo](https://sunlight02.github.io/humanoid-badminton/) · [arXiv:2609.31840](https://arxiv.org/abs/2609.31840)
