import { readFile, writeFile, mkdir, copyFile, access } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const profiloRoot = resolve(root, '../../../profilo');
const assetOut = resolve(root, 'assets/case-studies');

const OCEAN_TOKENS = `
/* Ocean theme — semantic tokens mapped for legacy case-study markup */
:root {
  --green: #0870ca;
  --green-deep: #086be6;
  --green-soft: #e7f3fd;
  --pink: #116af8;
  --pink-deep: #086be6;
  --pink-soft: #f5faff;
  --coral: #ff8a7a;
  --coral-soft: #fff3f0;
  --purple: #5b8def;
  --purple-soft: #eef4ff;
  --teal: #2aa198;
  --teal-soft: #e6f7f5;
  --gold: #d4a056;
  --gold-soft: #fef6e8;
  --paper: #f7f7f7;
  --white: #ffffff;
  --ink: #343434;
  --text: #46514b;
  --muted: #7b7b7b;
  --rule: rgba(8, 107, 230, 0.22);
  --soft-rule: rgba(8, 112, 202, 0.12);
  --pad: clamp(22px, 4.3vw, 62px);
  --radius: 8px;
  --shadow-sm: 0 2px 8px rgba(8, 107, 230, 0.06);
  --shadow-md: 0 8px 30px rgba(8, 107, 230, 0.1);
  --shadow-lg: 0 16px 48px rgba(8, 107, 230, 0.13);
  --shadow-pink: 0 8px 30px rgba(17, 106, 248, 0.15);
  --font-display: "Zen Kaku Gothic New", "Noto Sans SC", "Microsoft YaHei", sans-serif;
  --font-body: "Roboto", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
}
`.trim();

const CASES = [
  {
    slug: 'travel-agent',
    source: join(profiloRoot, 'projects/travel-agent/index.html'),
    cssName: 'case-study-travel.css',
    assets: [
      'travel-route-detail.png',
      'travel-home.png',
      'travel-ai-optimize.png',
      'xiaohongshu.jpg',
      'wanderlog.jpg',
      'yuanzhou-track.jpg',
      'doubao.png',
      'travel-plan-mode.png',
      'travel-ai-chat.png',
      'travel-form.png',
      'travel-requirements.png',
      'travel-generating.png',
      'travel-manual-edit.png',
      'travel-list.png',
      'travel-quiz.png',
      'travel-quiz-result.png',
    ],
  },
  {
    slug: 'scout-ai',
    source: join(profiloRoot, 'projects/scout-ai/index.html'),
    cssName: 'case-study-scout.css',
    assets: [
      'scoutai-macbook-base.png',
      'scoutai-new-research.png',
      'scoutai-agent-done.png',
      'scoutai-report-detail.png',
      'scoutai-keywords.png',
      'scoutai-traceable.png',
      'scoutai-followup.png',
      'scoutai-report-structure.png',
    ],
  },
];

function extractStyle(html) {
  const match = html.match(/<style>([\s\S]*?)<\/style>/);
  if (!match) throw new Error('Missing inline style block');
  return match[1]
    .replace(/:root\s*\{[\s\S]*?\}/, '')
    .replace(
      /font-family:\s*"Noto Sans SC"[^;]+;/g,
      'font-family: var(--font-body);',
    )
    .replace(/rgba\(0,\s*57,\s*31,/g, 'rgba(8, 107, 230,');
}

function extractBody(html) {
  const match = html.match(/<body>([\s\S]*?)<\/body>/);
  if (!match) throw new Error('Missing body');
  return match[1];
}

const CAPSULE_HEADER = `<header class="site-header site-header--case">
    <a class="wordmark" href="../../index.html#home">lunaliu</a>
    <nav class="case-nav" aria-label="项目页导航">
      <a href="../../index.html#internship">INTERNSHIP</a>
      <a href="../../index.html#projects">PROJECTS</a>
      <a class="nav-cta" href="../../index.html#about">ABOUT ME <span aria-hidden="true">→</span></a>
    </nav>
  </header>`;

function transformBody(body, slug) {
  let next = body
    .replace(/\.\.\/\.\.\/index\.html/g, '../../index.html')
    .replace(/\.\.\/\.\.\/demo_pic\//g, '../../assets/case-studies/')
    .replace(/\?v=[^"']+/g, '')
    .replace(/<header class="global-header">[\s\S]*?<\/header>/, CAPSULE_HEADER);

  if (slug === 'travel-agent') {
    next = next
      .replace(/<a class="crumb" href="[^"]*">[\s\S]*?<\/a>\s*/g, '')
      .replace(
        /<p class="section-label">01 · 产品概览<\/p>\s*<div class="chips">[\s\S]*?<\/div>\s*/,
        '<p class="section-label">01 · 产品概览</p>\n        ',
      )
      .replace(
        /(<p class="summary">[\s\S]*?<\/p>)\s*<div class="facts"[\s\S]*?<\/div>/,
        `$1
        <p class="case-period">2026.05 – 2026.06</p>
        <div class="chips">
          <span class="chip">AI AGENT</span>
          <span class="chip">双路径规划</span>
          <span class="chip">个性化生成</span>
          <span class="chip">持续调整</span>
        </div>`,
      )
      .replace(/Agent 工作流/g, '工作流')
      .replace(
        /<article class="pain-card" style="background: linear-gradient\(145deg, var\(--green-deep\), #00643d\);">/g,
        '<article class="pain-card persona-card">',
      )
      .replace(/<span>10<\/span>测试与迭代/g, '<span>10</span>测试')
      .replace(/\s*<p class="status-note">下一步将通过约束规则、路线校验、Prompt 结构化与反馈闭环，提高生成结果的真实可用性。<\/p>/g, '');
  }

  return next;
}

function buildHtml({ title, cssName, body }) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link rel="icon" href="data:,">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Zen+Kaku+Gothic+New:wght@500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../css/reveal.css?v=20260928">
  <link rel="stylesheet" href="../../css/case-study-shared.css?v=20260928">
  <link rel="stylesheet" href="../../css/${cssName}?v=20260928">
</head>
<body class="case-study-page">
${body}
  <script defer src="../../js/reveal.js?v=20260928"></script>
</body>
</html>
`;
}

async function copyAssets(names) {
  await mkdir(assetOut, { recursive: true });
  for (const name of names) {
    const src = join(profiloRoot, 'demo_pic', name);
    const dest = join(assetOut, name);
    await access(src);
    await copyFile(src, dest);
  }
}

for (const item of CASES) {
  const html = await readFile(item.source, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1] || item.slug;
  const style = extractStyle(html);
  const css = `${OCEAN_TOKENS}\n\n${style}\n\n.case-study-page .brand,\n.case-study-page h1,\n.case-study-page h2,\n.case-study-page .section-label,\n.case-study-page .chip {\n  font-family: var(--font-display);\n}\n`;
  const body = transformBody(extractBody(html), item.slug);
  const outDir = resolve(root, 'projects', item.slug);
  await mkdir(outDir, { recursive: true });
  await writeFile(resolve(root, 'css', item.cssName), css);
  await writeFile(resolve(outDir, 'index.html'), buildHtml({ title, cssName: item.cssName, body }));
  await copyAssets(item.assets);
  console.log(`built ${item.slug}`);
}

console.log('case studies ready');
