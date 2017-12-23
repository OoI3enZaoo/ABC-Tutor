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
    "url": "/_nuxt/app.102a7277e79909212db2.js",
    "revision": "07b5e347196bb01b2de9cc1f51e5df69"
  },
  {
    "url": "/_nuxt/common.059117a96f19c2fa18a3.js",
    "revision": "7f658dfcc038e01eb935f5ac6b77b19f"
  },
  {
    "url": "/_nuxt/common.6fbc01cf9c2e9d52d488075de0553e07.css",
    "revision": "3aad9b3a6683e8efa4ed1e38984f296f"
  },
  {
    "url": "/_nuxt/layouts/default.293ee36e2185bbd31f2b.js",
    "revision": "c309309f33c9593e27853ecfa622c8b5"
  },
  {
    "url": "/_nuxt/manifest.64d5ada45cb044d3db67.js",
    "revision": "c1317d379cf50147222dc492a6f59c51"
  },
  {
    "url": "/_nuxt/pages/aboutus.7218604862a8b48b3d2a.js",
    "revision": "442cef7281420cbc9c60227361f79fce"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.0b8038d15a2b1ae3913c.js",
    "revision": "1b1335fd7058bd9cb420bd8da2788779"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.85a91f1404e28b56e5ff.js",
    "revision": "795f00c77e8aa795180e07c0e7217b02"
  },
  {
    "url": "/_nuxt/pages/course\\index.6787a2ca3f27b3b89e39.js",
    "revision": "1486fbfdc49108072a7bee5d052315bb"
  },
  {
    "url": "/_nuxt/pages/home.8c74705e526fb07f59d8.js",
    "revision": "e58847d3f3ea066bdc53e88542b20e99"
  },
  {
    "url": "/_nuxt/pages/index.6307e992c7f28b492868.js",
    "revision": "fd3781987e07f837fdeb36c072688569"
  },
  {
    "url": "/_nuxt/pages/login.4753196b50b809e6674d.js",
    "revision": "e92aa881fd433434c6f763a710388eef"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.vue\\index.7db7ccdf6bb246a7773b.js",
    "revision": "653dfe6c90038167c308a59f66b60e72"
  },
  {
    "url": "/_nuxt/pages/register.ad75e2b7b68b20d12a15.js",
    "revision": "4bc8c11804779a0446e5fa1a21d1569b"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.72a57700bb8d3d9947cf.js",
    "revision": "d04fd7b045792bf2b06111f934ce3367"
  },
  {
    "url": "/_nuxt/pages/settings.87ce91600e3f87e888b9.js",
    "revision": "235063cf73c0159c640a50020ce7dcfe"
  },
  {
    "url": "/_nuxt/pages/signout.867db4b0223807cbc8e6.js",
    "revision": "5a4a046c359c5976bdf3f8b9e17cedc9"
  },
  {
    "url": "/_nuxt/pages/test.7d4e9bfcc089e7b2b273.js",
    "revision": "9699dab9b5eb06b91102f0c31baace95"
  },
  {
    "url": "/_nuxt/pages/test2.a65db38a6e82b1f2d532.js",
    "revision": "40956902793aaf055c7a90e34c7cd743"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.c0a03ed08b91772bbf38.js",
    "revision": "82901df9f39a50a8b160926ccd1131a2"
  },
  {
    "url": "/_nuxt/pages/user\\_id.e1742b51dbec4fe1eacf.js",
    "revision": "4fde21997e478468a8e38cea30e51fd3"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "ABC-Tutor_3.0.1",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
