import { type NavBarConfig, type NavBarSearchConfig, NavBarSearchMethod } from "../types/navBarConfig";

export const navBarSearchConfig: NavBarSearchConfig = { method: NavBarSearchMethod.PageFind };
export const navBarConfig: NavBarConfig = {
	links: [
		{ name: "主页", url: "/", icon: "material-symbols:home" },
		{ name: "研究项目", url: "/projects/", icon: "material-symbols:rocket-launch", pageKey: "projects" },
		{ name: "笔记", url: "/notes/", icon: "material-symbols:edit-note" },
		{ name: "关于我", url: "/about/", icon: "material-symbols:person" },
		{ name: "GitHub", url: "https://github.com/FrankGraen", external: true, icon: "fa7-brands:github" },
	],
};
