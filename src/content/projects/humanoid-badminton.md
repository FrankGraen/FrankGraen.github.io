---
title: Humanoid Badminton
published: 2026-09-25
order: 1
description: 从有限的人类动作数据中学习全身击球技能，让人形机器人完成正手、反手和高动态跳跃回球。
image: /assets/projects/badminton.webp
status: published
tags: [Humanoid Robotics, Hierarchical RL, Motion Skills]
link:
  - label: 项目网站
    icon: material-symbols:open-in-new
    value: https://sunlight02.github.io/humanoid-badminton/
  - label: 论文
    icon: material-symbols:description-outline
    value: https://arxiv.org/abs/2609.31840
---

## Learning Dynamic Racket Skills from Limited Human Motion Data

**CoRL 2026 · 共同作者**

羽毛球要求机器人在短暂的接触窗口中做出及时决策，并精确协调球拍姿态、速度和全身运动。
这一项目利用有限且不完美的人类动作数据，学习人形机器人的动态击球技能。

## 方法概览

- **动作数据增强**：通过任务随机化扩展稀疏的击球参考，建立连续的潜在技能空间。
- **层级强化学习**：高层规划器根据羽毛球状态选择连续技能编码，在线组合低层击球动作。
- **条件对抗正则**：在保持回球性能的同时，使高层技能使用更接近人类运动先验。
- **真实机器人验证**：实现包含正手、反手和高动态跳跃回球的人机连续对打。

## 论文与演示

[项目网站与演示](https://sunlight02.github.io/humanoid-badminton/) · [arXiv:2609.31840](https://arxiv.org/abs/2609.31840)
