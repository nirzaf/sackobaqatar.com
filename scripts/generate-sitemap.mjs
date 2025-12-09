import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const baseUrl = process.env.SITE_URL || 'https://sackobaqatar.com'
const routes = [
  '/',
  '/about',
  '/news',
  '/gallery',
  '/history',
  '/exco',
  '/events',
  '/membership-terms',
  '/contact'
]

const now = new Date().toISOString()
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(p => `  <url>\n    <loc>${baseUrl}${p}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${p === '/' ? '1.0' : '0.7'}</priority>\n  </url>`).join('\n')}
</urlset>`

const out = resolve(process.cwd(), 'public', 'sitemap.xml')
writeFileSync(out, xml, 'utf8')
console.log('Generated sitemap at', out)
