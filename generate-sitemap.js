const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/our_story', changefreq: 'monthly', priority: 0.8 },
  { url: '/motorcycle', changefreq: 'monthly', priority: 0.8 },
  { url: '/book_now', changefreq: 'monthly', priority: 0.8 },
  { url: '/reach_us', changefreq: 'monthly', priority: 0.8 },
  { url: '/rsa_ew', changefreq: 'monthly', priority: 0.8 },
  { url: '/test_ride', changefreq: 'monthly', priority: 0.8 },
  { url: '/product_enquiry', changefreq: 'monthly', priority: 0.8 },
];

const generateSitemap = async () => {
  const stream = new SitemapStream({ hostname: 'https://hondabigwingbangalore.com' });

  urls.forEach((url) => {
    stream.write(url);
  });

  stream.end();

  const sitemap = await streamToPromise(stream).then((data) => data.toString());

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap has been generated at public/sitemap.xml');
};

generateSitemap();
