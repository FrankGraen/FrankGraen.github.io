import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "banner",
	playerEnable: false,
	src: {
		desktop: "/assets/backgrounds/firefly-desktop.webp",
		mobile: "/assets/backgrounds/firefly-mobile.webp",
	},
	common: {
		dimOpacity: 0.16,
		homeText: {
			enable: true,
			title: "FrankGraen",
			titleSize: "4.5rem",
			subtitle: ["Robotics & Embodied Intelligence", "Learning World Models", "Exploring Reinforcement Learning"],
			subtitleSize: "1.5rem",
			typewriter: {
				enable: true,
				speed: 70,
				deleteSpeed: 35,
				pauseTime: 4000,
			},
			linksEnable: true,
			links: [
				{ name: "GitHub", icon: "fa7-brands:github", url: "https://github.com/FrankGraen", showName: true },
			],
		},
		carousel: { enable: false, interval: 5000, transitionEffect: "fade" },
		waves: { enable: { desktop: true, mobile: true } },
		gradient: { enable: { desktop: true, mobile: true }, height: "10%" },
	},
	banner: {
		position: "center 35%",
		postInfo: { mode: "description" },
		navbar: { transparentMode: "semi", blur: 12 },
	},
	overlay: { zIndex: -1, opacity: 0.8, blur: 10, cardOpacity: 0.6 },
	fullscreen: {
		layout: "classic",
		position: "center",
		navbar: { transparentMode: "semifull", blur: 12 },
		blurRamp: { enable: { desktop: true, mobile: true } },
	},
};
