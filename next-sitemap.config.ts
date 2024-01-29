/** @type {import('next-sitemap').IConfig} */

if (!process.env.SITE_URL) {
  throw new Error("SITE_URL is not defined");
}

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Enable for larger sites
};
