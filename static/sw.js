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
    "url": "/_nuxt/app.cb6707988040febf73c1.js",
    "revision": "760cf0e3022ec73f8e96b3ed7563e96d"
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
    "url": "/_nuxt/layouts/default.4b5ff6a71f42af3d970e.js",
    "revision": "13a6225644219453aedb6b1c13cc74e5"
  },
  {
    "url": "/_nuxt/manifest.3adcb6fa8e7c8cf51d5b.js",
    "revision": "d03b682b005936bd38f848077f053eba"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.7ba34c1ea2c3633bc17c.js",
    "revision": "de2c074142f626d496c2a40e8d0819ef"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.b79e34751c3a4b3f3f44.js",
    "revision": "917358ee379533a9eda3922557c1afc9"
  },
  {
    "url": "/_nuxt/pages/course\\index.8d8fb254cd01cfb9c002.js",
    "revision": "9761d844c8a5a695eea4cab3dd41a95a"
  },
  {
    "url": "/_nuxt/pages/home.b41a15b1a4542153cad6.js",
    "revision": "e3f8ea57e5690e97a233d3be9e205b99"
  },
  {
    "url": "/_nuxt/pages/index.96b38fb2017981fbe3e5.js",
    "revision": "ce52043ed0128c04ef4d33c7e9124b05"
  },
  {
    "url": "/_nuxt/pages/login.21b579f94d999d0fef3b.js",
    "revision": "2aa3e3d961ce2226e4693f8e86a8354a"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.c93cdca68920697c0f90.js",
    "revision": "98ddff1ec4b9188c4f02fb9401bb4d5d"
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
    "url": "/_nuxt/pages/tutor\\create.4bc24b4b8aadb3d7e856.js",
    "revision": "8eb32d61fab12b3017f819c7804edc63"
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
