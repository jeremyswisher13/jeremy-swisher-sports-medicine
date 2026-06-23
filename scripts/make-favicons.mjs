// Renders the brand favicon (gold medical cross on a navy tile) to PNG sizes.
// Run: node scripts/make-favicons.mjs   (uses the installed Playwright Chromium)
import { chromium } from '@playwright/test'

// Full-bleed navy square + centered gold cross. Square (no rounded corners) so
// PNG fallbacks look right on any tab background; iOS rounds the apple-touch one.
const html = `<!doctype html><html><head><style>*{margin:0}html,body{width:100%;height:100%}</style></head>
<body><svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" fill="#112038"/>
<path d="M16 8v16M8 16h16" stroke="#d4af5f" stroke-width="3.6" stroke-linecap="round"/>
</svg></body></html>`

const browser = await chromium.launch()
async function shot(size, out) {
  const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 })
  await page.setContent(html)
  await page.screenshot({ path: out })
  await page.close()
}
await shot(32, 'public/favicon-32.png')
await shot(180, 'public/apple-touch-icon.png')
await browser.close()
console.log('wrote public/favicon-32.png + public/apple-touch-icon.png')
