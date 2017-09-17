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
    "url": "/_nuxt/app.38f0afd0d594736f8b44.js",
    "revision": "03531b173e55474217d9234bd6e5c5f5"
  },
  {
    "url": "/_nuxt/common.401f1c1fd534d6fada89.js",
    "revision": "ba18622c99c9ff2dfc30a2f5797df00a"
  },
  {
    "url": "/_nuxt/common.4480cd4dd8804a8c498a012ff68747b4.css",
    "revision": "ed831d1134eee269b58bc91543647dc5"
  },
  {
    "url": "/_nuxt/layouts/default.9933b29a5ba81e1c1199.js",
    "revision": "70d233d3c79d0f67264524286712a3dc"
  },
  {
    "url": "/_nuxt/manifest.e3d5618356a8f429b274.js",
    "revision": "40601cafcc7c747479f96dc17acecbbc"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_id.34d15b39dc6b951f2bcc.js",
    "revision": "27d851f5db098252528bc401532ea9fb"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.f87b5bff986866f490b2.js",
    "revision": "89462aea4b5517fec7bc53b2d53dc42c"
  },
  {
    "url": "/_nuxt/pages/course\\index.864ea7cefaddd9c8c004.js",
    "revision": "de7696acbe91734e355f029552aeed8c"
  },
  {
    "url": "/_nuxt/pages/index.fc1588de7a5cd4bffa8b.js",
    "revision": "cd94c4de8d2ffbae3929ba35fdbb4b59"
  },
  {
    "url": "/_nuxt/pages/login.e720ff16259143ddc902.js",
    "revision": "ab02fcac69f9baee886f7a9ca3384529"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.vue\\index.635f936b7a393224de68.js",
    "revision": "24d4dea7c4efe4029b338c2ea80fa642"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.d9c8785dbf5045490de0.js",
    "revision": "cd221e93b93f3dcc0855330c1169c0bb"
  },
  {
    "url": "/_nuxt/pages/settings.983f480af5ba3a41aee6.js",
    "revision": "b852ee5a6e4ef5dec9ff90a014faabe2"
  },
  {
    "url": "/_nuxt/pages/signout.65d50828b36609108594.js",
    "revision": "684cabda16d02d04f45e2b9d35c18d7a"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.62e6d60caf5834ed13d6.js",
    "revision": "b1c81811fd9b9c8e92952e6eb301e392"
  },
  {
    "url": "/_nuxt/pages/tutor\\index.bfb7d0d57c1cf13d692a.js",
    "revision": "a741a247e695da61e2c27eaca6f93f5e"
  },
  {
    "url": "/_nuxt/pages/tutor\\manage\\_id.f1d85d446c7812244ddd.js",
    "revision": "f03803f37494467622ddef7317764b73"
  },
  {
    "url": "/_nuxt/pages/user\\_id.c3f57d4c074e63a383bf.js",
    "revision": "51801539393eea5bbfb6f00e11d55e75"
  },
  {
    "url": "/_nuxt/pages/ทด.ccbfbe706cee130016aa.js",
    "revision": "d3a1a01d7021de720cbf6b1d4961f694"
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
