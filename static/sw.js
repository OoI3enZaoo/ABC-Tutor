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
    "url": "/_nuxt/app.cbd806d116edfb8620a0.js",
    "revision": "8456d75164abf8e883a66371f1b80696"
  },
  {
    "url": "/_nuxt/common.04cae3b6107aa2b89d96cd6d39e49c38.css",
    "revision": "6f5d0fa32d0d2bbf79bb1c1924519bc4"
  },
  {
    "url": "/_nuxt/common.9ffd587e9e8c823c69c4.js",
    "revision": "99365d273277493d652129f320ff49c9"
  },
  {
    "url": "/_nuxt/layouts/default.4f40e3d5b9f1d0db327f.js",
    "revision": "f8812009b82f6893ff0e2d26e270eab9"
  },
  {
    "url": "/_nuxt/manifest.cc374cd476f23270a79f.js",
    "revision": "73f9ba4b9291e45c327e208e7aad68cb"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.5159dfd86663be76c9c9.js",
    "revision": "5803920cdb05e712eed930bc05f82919"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.69c3c822f5e1cbf88f52.js",
    "revision": "1203db26a5fa1c497c1a5500ef3b912b"
  },
  {
    "url": "/_nuxt/pages/course\\index.991e94cbc135b2f3264b.js",
    "revision": "47c2596b48889967ea0fe0016dbb161d"
  },
  {
    "url": "/_nuxt/pages/home.44eb9b4d70a0cd1fe166.js",
    "revision": "dde46f98f099292cd1cf64d93f2eebf8"
  },
  {
    "url": "/_nuxt/pages/index.806d008a3b5b0238cefe.js",
    "revision": "8a6709e37ab98ec1c0f07db4fd5ed741"
  },
  {
    "url": "/_nuxt/pages/login.3fc182171f45d31cd83e.js",
    "revision": "8914d4a12bb82de9d7dfd5d165274b04"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.vue\\index.733fb642cda863ffa045.js",
    "revision": "bd81a0505a2c5bdbe4e82d5ab52729c4"
  },
  {
    "url": "/_nuxt/pages/register.73ec90b9bf9238025fb4.js",
    "revision": "eed8240c1c45233ed819654735d46672"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.3e7ba6de8294af143679.js",
    "revision": "8e471fdd592cb14b7df9b9d3a6b9c5ce"
  },
  {
    "url": "/_nuxt/pages/settings.ed0f8c4c256659f6b8f2.js",
    "revision": "ebd754a3d83a49e3e44b496214f78e24"
  },
  {
    "url": "/_nuxt/pages/signout.37fe4e5b0cedbd6220cb.js",
    "revision": "463d2c2f09eebeaae88902c699221768"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.305604d62c6344ef8bec.js",
    "revision": "920d7c23f9d581e83746ba3013f6fcb7"
  },
  {
    "url": "/_nuxt/pages/user\\_id.557369e87b2947d21b72.js",
    "revision": "a485205b607ee07e2c52b39d71788ae9"
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
