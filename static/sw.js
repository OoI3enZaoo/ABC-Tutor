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
    "url": "/_nuxt/app.8c5e45b72a2cc0e81807.js",
    "revision": "e20d7356d9d5a15a1eae154cb0657cbd"
  },
  {
    "url": "/_nuxt/common.04cae3b6107aa2b89d96cd6d39e49c38.css",
    "revision": "6f5d0fa32d0d2bbf79bb1c1924519bc4"
  },
  {
    "url": "/_nuxt/common.6a40d2724ec676e69df6.js",
    "revision": "b6545cdd8b8d69134fe279bdf1db6a10"
  },
  {
    "url": "/_nuxt/layouts/default.277f9dd5c683f03de3bc.js",
    "revision": "12c54e22e89ccd6586e66db99155323f"
  },
  {
    "url": "/_nuxt/manifest.d81ab7ad7232a2eab7c6.js",
    "revision": "0f77b263014f2a60a14e14661b516518"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.2f9956463b72f41e195d.js",
    "revision": "36bad324e2208ac499e24882ada9fb68"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.2d3f7fb668a8347d2619.js",
    "revision": "a93a6833698455b2226eba910b08e2fc"
  },
  {
    "url": "/_nuxt/pages/course\\index.ab32d1867474f22dcaff.js",
    "revision": "ba17a064b60c5ae1be12a86b3c68a511"
  },
  {
    "url": "/_nuxt/pages/home.04c4dee1460e54a2e3ac.js",
    "revision": "481e879e4fa6aa94117dc3162413075b"
  },
  {
    "url": "/_nuxt/pages/index.db596965890eb9fae590.js",
    "revision": "6b573ae9b4d8e1f8fe3e78b7160bea45"
  },
  {
    "url": "/_nuxt/pages/login.24ae5702fff5bf52881a.js",
    "revision": "cda673a4f368917aa8595b61256f7e87"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.7835448382671d124737.js",
    "revision": "7961d3c77bea10f6df6a345d1e43a96e"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.0e6b7393a81e69b6e626.js",
    "revision": "0212023abc34b7e8f4dd28906f41faea"
  },
  {
    "url": "/_nuxt/pages/settings.a0924b85b14c254a2f61.js",
    "revision": "de1cbfa36c8541bd02aac8538733f68d"
  },
  {
    "url": "/_nuxt/pages/signout.749934eac2a12d85aa4d.js",
    "revision": "0e3a5cd2ad71de9eed0707a1299ef31f"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.305604d62c6344ef8bec.js",
    "revision": "920d7c23f9d581e83746ba3013f6fcb7"
  },
  {
    "url": "/_nuxt/pages/user\\_id.5c2dd7a544037815a39c.js",
    "revision": "604152984bcb1095927e9b0d030b9eb9"
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
