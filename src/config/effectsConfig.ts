import type { CursorEffectsConfig, SakuraConfig } from "../types/effectsConfig";

// 特效配置 - 集中管理所有动画特效

export const cursorEffectsConfig: CursorEffectsConfig = {
	enable: true,
	trail: true,
	colors: ["#63cdb5", "#acdfe6", "#e8cc83"],
	opacity: 0.8,
};

export const sakuraConfig: SakuraConfig = {
	// 是否启用樱花特效
	enable: true,

	// 樱花数量
	sakuraNum: 14,

	// 樱花越界限制次数，-1为无限循环
	limitTimes: -1,

	// 樱花尺寸
	size: {
		// 樱花最小尺寸倍数
		min: 0.22,
		// 樱花最大尺寸倍数
		max: 0.42,
	},

	// 樱花不透明度
	opacity: {
		// 樱花最小不透明度
		min: 0.25,
		// 樱花最大不透明度
		max: 0.6,
	},

	// 樱花移动速度
	speed: {
		// 水平移动
		horizontal: {
			// 水平移动速度最小值
			min: -0.45,
			// 水平移动速度最大值
			max: -0.15,
		},
		// 垂直移动
		vertical: {
			// 垂直移动速度最小值
			min: 0.45,
			// 垂直移动速度最大值
			max: 0.85,
		},
		// 旋转速度
		rotation: 0.012,
		// 消失速度，不应大于最小不透明度
		fadeSpeed: 0.015,
	},

	// 层级，确保樱花在合适的层级显示
	zIndex: 100,
};
