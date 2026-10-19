import type { SidebarLayoutConfig } from "../types/sidebarConfig";

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "both",
	tabletSidebar: "left",
	hideSidebarOnPostPage: false,
	noSidebarContentWidth: 1,
	leftComponents: [
		{ type: "profile", enable: true, position: "top", showOnPostPage: true },
		{ type: "announcement", enable: true, position: "top", showOnPostPage: true },
		{ type: "calendar", enable: true, position: "sticky", showOnPostPage: false, specificConfig: { calendar: { showHeatmap: false } } },
	],
	rightComponents: [
		{ type: "dynamic", enable: true, position: "top", showOnPostPage: true, specificConfig: { dynamic: { limit: 2 } } },
		{ type: "stats", enable: true, position: "top", showOnPostPage: true },
		{ type: "siteInfo", enable: true, position: "sticky", showOnPostPage: true },
	],
	mobileBottomComponents: [],
};
