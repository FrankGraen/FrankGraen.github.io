---
title: "EgoPush: Egocentric Multi-Object Rearrangement for Mobile Robots via Constrained Teacher Observability"
lang: en
authors:
  - name: Boyuan An
  - name: Zhexiong Wang
    marker: "*"
  - name: Yipeng Wang
    marker: "*"
  - name: Jiaqi Li
  - name: Sihang Li
    marker: "\u2020"
  - name: Jing Zhang
    marker: "\u2020"
  - name: Chen Feng
    marker: "\u2020"
authorNotes: "* Equal contribution; \u2020 Corresponding author."
venue: "arXiv preprint, 2026"
published: 2026-02-20
description: Learning long-horizon multi-object rearrangement from egocentric vision, with zero-shot transfer to a mobile robot and no global map or external tracking at deployment.
image: /assets/projects/egopush.webp
tags: [Egocentric Vision, Reinforcement Learning, Sim-to-Real]
link:
  - label: Project
    icon: material-symbols:open-in-new
    value: https://ai4ce.github.io/EgoPush/
  - label: Paper
    icon: material-symbols:description-outline
    value: https://arxiv.org/abs/2602.18071
---

## Overview

EgoPush studies how a mobile robot can rearrange multiple objects over long horizons using only egocentric vision. The robot actively moves to observe spatial relationships and pushes objects into target configurations.

## Method

- **Object-centric representation**: Organizes observations by task role, including the object being pushed, the anchor object, and obstacles.
- **Constrained teacher observability**: Restricts the teacher's field of view and access to anchor information so that its supervision can be recovered from the student's local observations.
- **Policy distillation**: Transfers teacher policies to a depth-based student, with staged rewards for long-horizon tasks.
- **Sim-to-real transfer**: Deploys zero-shot on a TurtleBot without global maps, global localization, or external tracking.

## Paper and Demo

[Project website and demo](https://ai4ce.github.io/EgoPush/) · [arXiv:2602.18071](https://arxiv.org/abs/2602.18071)
