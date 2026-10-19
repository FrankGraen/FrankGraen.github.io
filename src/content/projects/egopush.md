---
title: EgoPush
published: 2026-02-20
order: 2
description: 从第一视角感知到长程多物体重排，在无需全局地图或外部追踪的条件下学习移动机器人的推摆策略。
image: /assets/projects/egopush.webp
status: published
tags: [Egocentric Vision, Reinforcement Learning, Sim-to-Real]
link:
  - label: 项目网站
    icon: material-symbols:open-in-new
    value: https://ai4ce.github.io/EgoPush/
  - label: 论文
    icon: material-symbols:description-outline
    value: https://arxiv.org/abs/2602.18071
---

## Egocentric Multi-Object Rearrangement for Mobile Robots via Constrained Teacher Observability

**公开研究项目 · 共同作者**

EgoPush 探索移动机器人如何仅通过第一视角视觉，完成长程、多物体、非抓取式重排。
机器人需要主动移动以获取任务相关的空间线索，并通过推摆将物体组织成目标构型。

## 方法概览

- **对象中心表示**：按被推动物体、锚点物体和障碍物组织观测，学习相对空间关系。
- **受限教师观测**：约束教师可使用的视觉范围和锚点可见性，使教师监督能够由学生的局部观测恢复。
- **策略蒸馏与长程学习**：将教师策略蒸馏到基于深度视觉的学生，结合阶段性奖励处理长程任务。
- **Sim-to-Real**：在部署时无需全局地图、全局定位或外部追踪，实现向 TurtleBot 的零样本迁移。

## 论文与演示

[项目网站与演示](https://ai4ce.github.io/EgoPush/) · [arXiv:2602.18071](https://arxiv.org/abs/2602.18071)
