import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.argv[2] || "dist");
const home = await readFile(resolve(root, "index.html"), "utf8");
const base = process.argv[3] || "/frankg.github.io/";
assert.match(home, new RegExp(`href="${base}projects/"`), "Navigation must include the Pages base path");
assert.match(home, new RegExp(`src="${base}assets/profile/avatar.webp"`), "Public images must include the Pages base path");
assert.doesNotMatch(home, /(?:href|src)="\/(?:assets|_astro|projects|notes|about|pagefind)\//, "Local links and assets must remain inside the Pages project");
assert.doesNotMatch(home, /frankg\.github\.io\/frankg\.github\.io\//, "URLs must not repeat the Pages base path");
assert.match(home, /FrankGraen/, "Home must identify FrankGraen");
assert.match(home, /data-wallpaper-mode="banner"/, "Home must use the native banner wallpaper");
assert.match(home, /firefly-desktop\.webp/, "Home must use the supplied Firefly artwork");
for (const id of ["left-sidebar", "right-sidebar", "category-bar", "latest-dynamics", "site-stats"]) {
	assert.match(home, new RegExp(`id="${id}"`), `Home must render ${id}`);
}
assert.match(home, /--font-zen-maru-gothic/, "Banner must include the native rounded title font");
assert.doesNotMatch(home, /RoboParty|github\.com\/roboparty|\bWAM\b/i, "Company details must be absent");
assert.doesNotMatch(home, /profile-home|research-grid/, "Home must use theme layout utilities");
assert.equal((home.match(/class="[^"]*\bproject-card-list\b[^"]*"/g) || []).length, 2, "Home must contain two list project cards");
for (const project of ["egopush", "humanoid-badminton"]) {
	assert.match(home, new RegExp(`/projects/${project}/`), "Home must link to each research project");
	const detail = await readFile(resolve(root, "projects", project, "index.html"), "utf8");
	assert.match(detail, /https:\/\/arxiv.org\/abs\//, "Project must link to its public paper");
}
for (const route of ["projects", "notes", "about"]) {
	const html = await readFile(resolve(root, route, "index.html"), "utf8");
	assert.match(html, /FrankGraen/, `${route} must use the correct identity`);
	assert.doesNotMatch(html, /RoboParty|github\.com\/roboparty|\bWAM\b/i, "Company details must be absent");
	assert.doesNotMatch(html, /xiaye@msn.com|Hello, I&#39;m XiaYe|example-project|code-examples|encrypted-demo/);
}
const about = await readFile(resolve(root, "about/index.html"), "utf8");
assert.match(about, /待填写/, "Contact details must remain placeholders");
console.log("Profile smoke checks passed: identity, routes, project lists, contacts, sidebars, banner font and company removal.");
