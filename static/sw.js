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
    "url": "/_nuxt/app.ed5fb43fbf3b24c41caf.js",
    "revision": "36aa571aff040c201d07426a5d156729"
  },
  {
    "url": "/_nuxt/common.669738fbf6dff1ffcad3.js",
    "revision": "139c9a81a329bbcb5126068f3bb67d94"
  },
  {
    "url": "/_nuxt/common.ec35cf21966e51eb6632b096b3eb2d56.css",
    "revision": "e50f86c416fd33468ccd3db6438160df"
  },
  {
    "url": "/_nuxt/layouts/default.0028b450d32baeaa4be3.js",
    "revision": "f7d055389de0c9b09fd18f4f846ae900"
  },
  {
    "url": "/_nuxt/manifest.7ca65a24a2c192999a31.js",
    "revision": "e5daea65998bc1e779d6be5a54c4e07b"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.91b971f34f1aefcaae77.js",
    "revision": "193d308caf124fa80775bfb941f125fd"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.f86dd5215dfe9138da59.js",
    "revision": "e1f6b249216b844a2ad70374e50e3512"
  },
  {
    "url": "/_nuxt/pages/course\\index.8d8fb254cd01cfb9c002.js",
    "revision": "9761d844c8a5a695eea4cab3dd41a95a"
  },
  {
    "url": "/_nuxt/pages/home.e4a0557fa65fd44d90d7.js",
    "revision": "5267eba71a397519f74ba4710160cb91"
  },
  {
    "url": "/_nuxt/pages/index.7426a693fa4454001f85.js",
    "revision": "27e3011ec276dcadf549d30aa09b9b9d"
  },
  {
    "url": "/_nuxt/pages/login.21b579f94d999d0fef3b.js",
    "revision": "2aa3e3d961ce2226e4693f8e86a8354a"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.b83be81d942ec7255f46.js",
    "revision": "a614b5d5f5b66019b3126c2a0c88a640"
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
    "url": "/_nuxt/pages/tutor\\create.adf8f5c04ec4988761f4.js",
    "revision": "39f80c43e0925e5cea99e9dc5222aa3e"
  },
  {
    "url": "/_nuxt/pages/user\\_id.99a2fdcd1aea2430f8bb.js",
    "revision": "a2fe0713516055e797d8a8be3ad1c878"
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
