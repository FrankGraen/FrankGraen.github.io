import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import sanitizeHtml from "sanitize-html";

const root = resolve(process.argv[2] || "dist");
const home = await readFile(resolve(root, "index.html"), "utf8");
const base = process.argv[3] || "/";
assert.match(home, new RegExp(`href="${base}projects/"`), "Navigation must include the Pages base path");
assert.match(home, new RegExp(`src="${base}assets/profile/avatar.webp"`), "Public images must include the Pages base path");
if (base !== "/") {
	assert.doesNotMatch(home, /(?:href|src)="\/(?:assets|_astro|projects|notes|about|pagefind)\//, "Local links and assets must remain inside the Pages project");
}
assert.doesNotMatch(home, /(?:href|src)="\/frankg\.github\.io\//, "The root site must not reference the previous repository path");
assert.match(home, /FrankGraen/, "Home must identify FrankGraen");
assert.match(home, /data-wallpaper-mode="banner"/, "Home must use the native banner wallpaper");
assert.match(home, /firefly-desktop\.webp/, "Home must use the supplied Firefly artwork");
for (const id of ["left-sidebar", "right-sidebar", "category-bar", "latest-dynamics", "site-stats"]) {
	assert.match(home, new RegExp(`id="${id}"`), `Home must render ${id}`);
}
assert.match(home, /--font-zen-maru-gothic/, "Banner must include the native rounded title font");
assert.doesNotMatch(home, /RoboParty|github\.com\/roboparty/i, "Company details must be absent");
assert.match(home, /World Action Model/, "Home must emphasize the WAM research direction");
assert.doesNotMatch(home, /Exploring Reinforcement Learning/, "Banner must emphasize WAM instead of RL");
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
	assert.doesNotMatch(html, /RoboParty|github\.com\/roboparty/i, "Company details must be absent");
	assert.doesNotMatch(html, /xiaye@msn.com|Hello, I&#39;m XiaYe|example-project|code-examples|encrypted-demo/);
}
const about = await readFile(resolve(root, "about/index.html"), "utf8");
assert.match(about, /World Action Model/, "About must identify WAM as the current research direction");
const encodedEmail = Buffer.from("frankgraen@gmail.com").toString("base64");
assert.ok(about.includes('href="mailto:frankgraen@gmail.com"') || about.includes(`data-encoded-email="${encodedEmail}"`), "About must provide the public email address, including the theme's protected links");
assert.ok(sanitizeHtml(about, { allowedTags: [], allowedAttributes: {} }).includes("frankgraen@gmail.com"), "About must display the public email address");
assert.doesNotMatch(about, /待填写|未填写|TBD|Other contact/i, "About must not contain contact placeholders");
for (const route of ["index.html", "projects/index.html", "projects/egopush/index.html", "projects/humanoid-badminton/index.html", "about/index.html", "notes/index.html", "dynamic/index.html"]) {
	const html = await readFile(resolve(root, route), "utf8");
	assert.match(html, /<html[^>]*lang="en"/, `${route} must declare English`);
	const text = sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} });
	assert.doesNotMatch(text, /\p{Script=Han}/u, `${route} must display English content only`);
}
for (const route of ["index.html", "projects/index.html"]) {
	const html = await readFile(resolve(root, route), "utf8");
	assert.match(html, /Humanoid Badminton: Learning Dynamic Racket Skills from Limited Human Motion Data/);
	assert.match(html, /EgoPush: Egocentric Multi-Object Rearrangement for Mobile Robots via Constrained Teacher Observability/);
	assert.match(html, /<strong[^>]*>Zhexiong Wang<\/strong>/, "Research must highlight the site owner's name");
	assert.match(html, /CoRL 2026/, "Research must display the accepted conference");
	assert.match(html, /arXiv preprint, 2026/, "Preprints must be identified separately from conference papers");
	assert.ok(html.indexOf("Humanoid Badminton:") < html.indexOf("EgoPush:"), "Research must list newer work first");
	assert.doesNotMatch(html, /data-status="(?:planning|developing|published|archived)"/, "Research must not use software development status filters");
}
console.log("Profile smoke checks passed: identity, routes, project lists, contacts, sidebars, banner font and company removal.");
