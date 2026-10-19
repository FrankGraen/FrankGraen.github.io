# FrankGraen 个人网站

基于 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly) 原始主题定制。
采用流萤头像、青绿点缀和 Firefly 原生插画横幅，保留主题署名与 LICENSE。

## 本机预览

需要 Node >= 22.23.0，推荐 Node 24；使用 pnpm 11。

```powershell
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

打开终端显示的本地地址。预览构建产物时先运行 pnpm build，再运行 pnpm preview。

## 修改内容

这是静态网站：项目、笔记和个人介绍在本地文件中编辑，预览确认后提交到
GitHub，由 Actions 重新构建并发布。网页上的搜索、主题切换和导航用于浏览，
没有在线写文章的管理后台。

| 内容 | 文件 |
| --- | --- |
| 姓名、头像、个人链接 | src/config/profileConfig.ts |
| 网站域名、标题、主题色 | src/config/siteConfig.ts |
| 首页项目列表 | src/pages/index.astro |
| 双侧栏及组件 | src/config/sidebarConfig.ts |
| 字体与横幅打字效果 | src/config/fontConfig.ts 与 src/config/backgroundWallpaper.ts |
| 公开项目动态 | src/content/dynamic/*.md |
| 项目详情 | src/content/projects/*.md |
| 关于我、联系方式占位 | src/content/spec/about.md |
| 头像和项目图片 | public/assets/profile/ 与 public/assets/projects/ |
| 背景模式 | src/config/backgroundWallpaper.ts，当前为 banner |
| 背景素材 | public/assets/backgrounds/，由用户提供的 firefly4.png 压缩生成 |

发布笔记：运行 `pnpm new-post filename`，编辑生成的 src/content/posts/ 下的文件。
笔记列表位于 /notes/。当前没有公开笔记，显示空状态。

创建动态可运行 `pnpm new-dynamic "一条愿意公开的近况"`。

## 找到现有主页

截至 2026-10-19，已核实的公开部署记录：

- 网站仓库：https://github.com/FrankGraen/FrankGraen.github.io
- 已部署地址：https://frankgraen.github.io/
- Pages 设置：https://github.com/FrankGraen/FrankGraen.github.io/settings/pages

在 GitHub 左侧仓库列表点击 `FrankGraen/FrankGraen.github.io`，进入仓库后点击顶部
`Settings`，在设置页左侧 `Code and automation` 分组点击 `Pages`。
发布成功时，上方会显示 `Your site is live at...` 和 `Visit site`。
仓库首页右侧的 `Deployments` / `github-pages` 也可查看部署地址。

`FrankGraen/FrankGraen` 是 GitHub 个人资料 README 仓库；它与网站仓库不同。
网站仓库已由 `frankg.github.io` 改名为 `FrankGraen.github.io`，按 GitHub 用户站点
规则发布在根域名。`src/config/siteConfig.ts` 中的 `siteBase` 为 `/`，
`site_url` 为 `https://frankgraen.github.io`，供 Astro、导航、资源和搜索共同使用。
动态页为 `https://frankgraen.github.io/dynamic/`；主页为根网址。
在 `https://github.com/FrankGraen` 可查看个人资料 README，点击其中的个人网站入口即可进入本站。

## 发布到 GitHub Pages

1. 打开 **https://github.com/FrankGraen/FrankGraen.github.io**。
2. 在 **Settings > Pages > Build and deployment > Source** 选择 **GitHub Actions**。
3. 在本地编辑本站内容，通过 GitHub Desktop 或 Git 提交并推送到该仓库的 `main` 分支。
   只提交本站文件夹内容，不提交父目录的简历、论文源文件和内部资料。
4. 打开仓库 **Actions > Deploy to GitHub Pages**，查看最新一次运行。
5. 等待 `build` 和 `deploy` 都成功，再打开 **https://frankgraen.github.io/**。
   浏览器仍显示旧页面时，按 `Ctrl + F5` 强制刷新。

仓库已附带自动部署工作流。之后可以直接在 GitHub 上编辑内容文件：打开文件，
点击铅笔图标，完成后点击 **Commit changes**，提交到 `main`。Actions 将重新发布。

GitHub Profile README 与这个网站是两项独立内容：README 使用同名仓库 FrankGraen/FrankGraen；
网站使用 FrankGraen/FrankGraen.github.io。GitHub 个人页只能渲染 Markdown，
不能直接运行 Astro 网站；个人资料 README 顶部已设置个人网站链接。

## 发布前检查

- [ ] site_url 是账号域名，用户站点的 siteBase 为 /。
- [ ] origin 指向自己的仓库，发布分支为 main 或 master。
- [ ] 姓名、公开研究与技能准确，未展示公司或部门信息。
- [ ] EgoPush 与 Humanoid Badminton 的项目网站、论文链接正确。
- [ ] 邮箱和其他联系方式只填写愿意公开的信息，或保留占位。
- [ ] 只提交网站内容，没有简历原件、手机号、密钥、内部文档。
- [ ] 头像与项目图的使用符合相应授权。
- [ ] 电脑、手机上的文字和图片正常，浅色和深色模式均可读。
- [ ] 以下检查完成，Actions 部署成功，线上地址可访问。

```powershell
pnpm check
pnpm type-check
pnpm build
node scripts/verify-profile.mjs
```

当前没有公开笔记，构建时会提示 posts 内容集合为空；这是当前内容状态。
主题构建还会提示被关闭页面跳转文件未纳入搜索，以及部分大脚本体积警告。

## 素材

头像由用户提供，角色及插画权利归各自权利人。
项目图选自用户提供的两项公开研究对应图件，已压缩为 WebP。
本站未加入私人邮箱、手机号、简历原件或论文源文件。
