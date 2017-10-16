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
    "url": "/_nuxt/app.87ad913eaeb81dcd9bdf.js",
    "revision": "d8ef0c38e3d8c5502b9f0c4138316ba1"
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
    "url": "/_nuxt/layouts/default.afc81fc9add2bf7f0b99.js",
    "revision": "304e39c45ac304d4e592b5819bbd79e1"
  },
  {
    "url": "/_nuxt/manifest.ea4057ddb6730a3a3894.js",
    "revision": "f475dfa9a8efc5008fffbf3df84f93b1"
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
    "url": "/_nuxt/pages/home.da2ed242ac027e02802b.js",
    "revision": "eb55782c871ab3401b6df027efa9b351"
  },
  {
    "url": "/_nuxt/pages/index.806d008a3b5b0238cefe.js",
    "revision": "8a6709e37ab98ec1c0f07db4fd5ed741"
  },
  {
    "url": "/_nuxt/pages/login.111f6be791f9ea94c18a.js",
    "revision": "1409aaa9b5673f953e8f7f83a2f7e9d3"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.vue\\index.b4847a361b7abb53b34a.js",
    "revision": "6c55d6af74718df05a9d521082a1d9a1"
  },
  {
    "url": "/_nuxt/pages/register.6b2cee6a4a763185c470.js",
    "revision": "c075bfd1336b8d0394988226e27d16cb"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.3e7ba6de8294af143679.js",
    "revision": "8e471fdd592cb14b7df9b9d3a6b9c5ce"
  },
  {
    "url": "/_nuxt/pages/settings.9b22250f619eb2a6a6fb.js",
    "revision": "1148d0459e5ceb2d0ecc1a1f81aee29c"
  },
  {
    "url": "/_nuxt/pages/signout.37fe4e5b0cedbd6220cb.js",
    "revision": "463d2c2f09eebeaae88902c699221768"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.c282a1d1f994cdde13b9.js",
    "revision": "52249fc8cfa9a6cd7f95b12c8b61a193"
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
