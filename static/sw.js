importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.690e5bb22f8e5bdaa1bd.js",
    "revision": "ed20dfa35a239a0d4dfb8422d439dfda"
  },
  {
    "url": "/_nuxt/common.ec35cf21966e51eb6632b096b3eb2d56.css",
    "revision": "e50f86c416fd33468ccd3db6438160df"
  },
  {
    "url": "/_nuxt/common.f02c6bf7a54b10a024b2.js",
    "revision": "0c4c45311b14b642d4394842fd83133a"
  },
  {
    "url": "/_nuxt/layouts/default.72e0c887c4734ae69b99.js",
    "revision": "4baad2f93b5b6bf398bbddcae6f7054e"
  },
  {
    "url": "/_nuxt/manifest.057e41c14b19e4de1403.js",
    "revision": "0654563d4c022f50e2340a000f1da5e7"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.1a530b7126ce465295dc.js",
    "revision": "a3b7d02f6e629135e0fb677df50e0a10"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.7a83ad323d890790f0ee.js",
    "revision": "eabcf92598c7c5d073e413d8544a4f84"
  },
  {
    "url": "/_nuxt/pages/course\\index.8003a5d8770e335d5ab1.js",
    "revision": "1b9568f564d58d8fb077c74d3d40451c"
  },
  {
    "url": "/_nuxt/pages/index.25089339c0032a6ae227.js",
    "revision": "ba95dfb91f9cd7664db1a581b29699f1"
  },
  {
    "url": "/_nuxt/pages/inspire.576aa4521552537ab166.js",
    "revision": "47cc808e9ee4c4e996eceadd92d9a818"
  },
  {
    "url": "/_nuxt/pages/login.27c6635c6fc5a0fa827e.js",
    "revision": "9442b47a46a8a98337128c89150485f7"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.vue\\index.f296455ea32f95092c39.js",
    "revision": "c379adea87eb9c1725c1cafaad10c50d"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.0bb5913e6c9e024099a8.js",
    "revision": "2acb51e9ececbe84ff485c1845e26698"
  },
  {
    "url": "/_nuxt/pages/settings.5f4731b6b41e625f902d.js",
    "revision": "67b9f96c7c50df15086eeb04cf838ae0"
  },
  {
    "url": "/_nuxt/pages/signout.98ec61cb133743f2fa32.js",
    "revision": "6eb0ef0841c834c1beb0fa9382bdcbf8"
  },
  {
    "url": "/_nuxt/pages/test2.70cc27cb6439d63e4762.js",
    "revision": "5a70486ee8fa43b6dec527e9740d81ed"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.8e2bcb386565af38f9f3.js",
    "revision": "a9566700c26b58ecfba5c3b978771b82"
  },
  {
    "url": "/_nuxt/pages/tutor\\index.ef41132530e220ec3ce6.js",
    "revision": "66e858e4bbd9e9a3caee7d68d09cf002"
  },
  {
    "url": "/_nuxt/pages/user\\_id.e02a4556a5e8d43cb0a4.js",
    "revision": "26cd080ab268f03bdbbcb7be7c98ce8c"
  },
  {
    "url": "/_nuxt/pages/ทด.0f7fb33761d5dcd067c9.js",
    "revision": "7c24997e0acf133f1824db0ddaed1a3c"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "ABC-Tutor_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
