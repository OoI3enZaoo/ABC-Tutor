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
    "url": "/_nuxt/app.3b73d542855cb634e147.js",
    "revision": "b5cf549b9129c7e8074bb767868c008c"
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
    "url": "/_nuxt/layouts/default.15a936e3a13bf1b00848.js",
    "revision": "07fb49121b0003f9f18dae1783705277"
  },
  {
    "url": "/_nuxt/manifest.683d02035fbe2dc59131.js",
    "revision": "ddede3ac90863b59412b879cd30d40a9"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.89881dbd41f93190bc03.js",
    "revision": "3d15e77b63dd6017b1a9088b2f45c82c"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.83438a1afff01622cfab.js",
    "revision": "89e84005e8a9d9b0407b433604d2be8e"
  },
  {
    "url": "/_nuxt/pages/course\\index.5db6651ba025bebee206.js",
    "revision": "dbd5fbe1b229da31475b047c53148669"
  },
  {
    "url": "/_nuxt/pages/home.364625eff544817efac5.js",
    "revision": "ff69901f70f13dd53b99d607c909c429"
  },
  {
    "url": "/_nuxt/pages/index.7b12aaec7df4f99d95a6.js",
    "revision": "868880585260a9d7f1be532c08fac8cd"
  },
  {
    "url": "/_nuxt/pages/inspire.576aa4521552537ab166.js",
    "revision": "47cc808e9ee4c4e996eceadd92d9a818"
  },
  {
    "url": "/_nuxt/pages/login.87140c1e42b06e2f03da.js",
    "revision": "39d14ff4de36374f78bca9ce1fee3fad"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.c7061506d9aa9acc69cb.js",
    "revision": "92ad9acc8a522ebc86a60bf581fce3e0"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.0bb5913e6c9e024099a8.js",
    "revision": "2acb51e9ececbe84ff485c1845e26698"
  },
  {
    "url": "/_nuxt/pages/settings.931c8fc211f919b2b2e7.js",
    "revision": "20ed650ab3817d9222aa401fa1a98422"
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
    "url": "/_nuxt/pages/tutor\\create.c1fe4a80ba74298eb213.js",
    "revision": "fd8bd391a49b43ade9872d5dc343acce"
  },
  {
    "url": "/_nuxt/pages/user\\_id.04de8dc106ea25493c76.js",
    "revision": "82fcea68f817dbf8494d638e7d79489e"
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
