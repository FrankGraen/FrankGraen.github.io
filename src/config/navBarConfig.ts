import { type NavBarConfig, type NavBarSearchConfig, NavBarSearchMethod } from "../types/navBarConfig";

export const navBarSearchConfig: NavBarSearchConfig = { method: NavBarSearchMethod.PageFind };
export const navBarConfig: NavBarConfig = {
	links: [
		{ name: "Home", url: "/", icon: "material-symbols:home" },
		{ name: "Research", url: "/projects/", icon: "material-symbols:rocket-launch", pageKey: "projects" },
		{ name: "Notes", url: "/notes/", icon: "material-symbols:edit-note" },
		{ name: "About", url: "/about/", icon: "material-symbols:person" },
		{ name: "GitHub", url: "https://github.com/FrankGraen", external: true, icon: "fa7-brands:github" },
	],
};
