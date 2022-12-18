/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://pan93.com",
  generateRobotsTxt: true,
};

export default config;
