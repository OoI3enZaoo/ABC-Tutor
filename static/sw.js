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
    "url": "/_nuxt/app.f44e6d9d260d20c55723.js",
    "revision": "43cd764cf3dfcfb555086738c1d8d63d"
  },
  {
    "url": "/_nuxt/common.144358bb8605283dd606.js",
    "revision": "1abe048660de5d6b8edb52b554c46336"
  },
  {
    "url": "/_nuxt/common.4480cd4dd8804a8c498a012ff68747b4.css",
    "revision": "ed831d1134eee269b58bc91543647dc5"
  },
  {
    "url": "/_nuxt/layouts/default.1b87f96e23ff46ea1c0c.js",
    "revision": "a89e6a512ac03837bc0e1d5492c3bf1d"
  },
  {
    "url": "/_nuxt/manifest.f1051d492c9531814a4c.js",
    "revision": "2f12cdfb3847abbffa4a054f19e883b3"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_id.61f120643a08179bbbb2.js",
    "revision": "0e87c99829d044b734442c9006d6a00b"
  },
  {
    "url": "/_nuxt/pages/course\\_id.48151bad8cf3c91bea57.js",
    "revision": "b5f7bcefbf7b6a94a8a6f84fb260dbcf"
  },
  {
    "url": "/_nuxt/pages/index.749ef0d7acf5f14e36ab.js",
    "revision": "361405a816ec8490c0f1e131659a021d"
  },
  {
    "url": "/_nuxt/pages/login.3b9c0bd2a0fa00c44b79.js",
    "revision": "2134825c989ae87334af492f709dce7f"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.vue\\index.99e22cebdcf7d1cdaa5f.js",
    "revision": "ebd75bbe58ea76bd4bae4b913aa6c192"
  },
  {
    "url": "/_nuxt/pages/mycourse\\index.719da3ffe350fcfc8ced.js",
    "revision": "f4835aa7118db770548e8f2b4082fcea"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.07d9f5783d51d67423e5.js",
    "revision": "a7a3d1f7390dcf5f72e33b7c2d3f5091"
  },
  {
    "url": "/_nuxt/pages/settings.83c220183a88b8b60f59.js",
    "revision": "0999c5d996a2c55609e9ed036fa4135d"
  },
  {
    "url": "/_nuxt/pages/signout.4892adfe73deefe9565e.js",
    "revision": "03934622180d734b6a0e7ad803e0f512"
  },
  {
    "url": "/_nuxt/pages/test\\blank.2814f63c1d3e404db37c.js",
    "revision": "de915e9d057ef01067bce7aedc6a6fc6"
  },
  {
    "url": "/_nuxt/pages/test\\firebase.b6e545841ebc7cc11f84.js",
    "revision": "106aa269d741e6a8cbce802c6ab85613"
  },
  {
    "url": "/_nuxt/pages/test\\store.61ee1210f6842e8a7d8f.js",
    "revision": "97fee2a33c95c251ba1c1852d4f55306"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.5641bc1540acc112aff0.js",
    "revision": "9e02334889d607f4f028ee8f438561b3"
  },
  {
    "url": "/_nuxt/pages/tutor\\index.f28c958e372359ff06ca.js",
    "revision": "596c25c50782f34a0658c1742fb0ba60"
  },
  {
    "url": "/_nuxt/pages/tutor\\manage\\_id.94d924ef19814acaf807.js",
    "revision": "7283f4e78d2122be7ecd623d902c6226"
  },
  {
    "url": "/_nuxt/pages/user\\_id.e8af6d3589921d4fb497.js",
    "revision": "3b4a715f27967e32a2dfd392c451435e"
  },
  {
    "url": "/_nuxt/pages/ทด.2be913ce479dd73fc78c.js",
    "revision": "78ccb3ff2ce71c12e6428ffa106a34e1"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "test_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
