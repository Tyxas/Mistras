/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mistras.lt',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
    additionalSitemaps: [],
  },
  // Transform for priority tuning
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0 }
    }
    // Service pages are SEO critical
    const servicePages = [
      '/parketo-slifavimas',
      '/be-dulkiu-slifavimas',
      '/grindu-alyvavimas',
      '/terasu-atnaujinimas',
      '/komercines-grindys',
    ]
    if (servicePages.some((p) => path.startsWith(p))) {
      return { loc: path, changefreq: 'weekly', priority: 0.9 }
    }
    // Pricing and portfolio
    if (path.startsWith('/kainos') || path.startsWith('/atlikti-darbai')) {
      return { loc: path, changefreq: 'weekly', priority: 0.8 }
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority }
  },
}
