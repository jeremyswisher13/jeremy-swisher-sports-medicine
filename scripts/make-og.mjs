// Renders the Open Graph / iMessage link-preview card to public/og-image.png.
// Run: node scripts/make-og.mjs   (uses the already-installed Playwright Chromium)
import { chromium } from '@playwright/test'

const html = `<!doctype html>
<html><head><meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  body {
    font-family: 'Inter', system-ui, sans-serif;
    color: #e7edf9;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(900px 520px at 86% -12%, rgba(212,175,95,0.22), transparent 60%),
      radial-gradient(700px 520px at -6% 110%, rgba(60,130,200,0.18), transparent 60%),
      linear-gradient(135deg, #0c1c38 0%, #143257 55%, #0e2647 100%);
  }
  .content { position: absolute; top: 100px; left: 96px; right: 96px; }
  .emblem {
    width: 88px; height: 88px; border-radius: 20px;
    background: linear-gradient(160deg, #1c3d6b, #0d2142);
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(212,175,95,0.4);
    display: grid; place-items: center; margin-bottom: 30px;
  }
  .eyebrow {
    color: #d4af5f; font-size: 23px; font-weight: 700;
    letter-spacing: 0.32em; text-transform: uppercase;
  }
  h1 {
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 600; font-size: 92px; line-height: 1.02;
    color: #ffffff; margin: 16px 0 0; letter-spacing: -0.5px;
  }
  .rule {
    width: 128px; height: 5px; border-radius: 999px; margin: 28px 0 26px;
    background: linear-gradient(90deg, #d4af5f, #9c7b2e);
  }
  .tag { font-size: 31px; line-height: 1.4; color: #b9c6dd; max-width: 800px; }
  .chips { display: flex; gap: 14px; margin-top: 34px; }
  .chips span {
    border: 1px solid rgba(212,175,95,0.5);
    border-radius: 999px; padding: 9px 20px;
    color: #e9d9ad; font-size: 21px; font-weight: 600;
  }
</style></head>
<body>
  <div class="content">
    <div class="emblem">
      <svg width="44" height="44" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7v18M7 16h18" stroke="#d4af5f" stroke-width="3.6" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="eyebrow">Sports Medicine</div>
    <h1>Jeremy Swisher, MD</h1>
    <div class="rule"></div>
    <p class="tag">Evidence-based injury education and module-based home exercise programs.</p>
    <div class="chips"><span>28 conditions</span><span>9 body regions</span><span>Sport pathways</span></div>
  </div>
</body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
})
await page.setContent(html, { waitUntil: 'networkidle' })
await page.evaluate(async () => {
  await document.fonts.ready
})
await page.screenshot({ path: 'public/og-image.png' })
await browser.close()
console.log('wrote public/og-image.png')
