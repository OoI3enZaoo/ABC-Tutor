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
    "url": "/_nuxt/app.14cea961d7ae97a1cf67.js",
    "revision": "ee720119ddae0a7eeb2d39f30a2978cf"
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
    "url": "/_nuxt/layouts/default.99b1d47e7c3b12e2c04e.js",
    "revision": "7cfedc6caca61078bc6c365789650035"
  },
  {
    "url": "/_nuxt/manifest.5c2ea0d64dae1f3eb802.js",
    "revision": "8837fffd4ec3bb7fd89abc3a9062576c"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.491c0f9c00c158d8986f.js",
    "revision": "3d278d90137cc193e1bdb938a1ebac92"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.bd4834227e2e6bb6574b.js",
    "revision": "839ea48c9b5b30a6a23e9741c363d8c5"
  },
  {
    "url": "/_nuxt/pages/course\\index.2e1e0a97fc685c304147.js",
    "revision": "89f2f117416b83037095b69259265842"
  },
  {
    "url": "/_nuxt/pages/home.e4a0557fa65fd44d90d7.js",
    "revision": "5267eba71a397519f74ba4710160cb91"
  },
  {
    "url": "/_nuxt/pages/index.4075639c090080396e47.js",
    "revision": "07bd2ff9ca09f30bfc79edd41af52897"
  },
  {
    "url": "/_nuxt/pages/login.21b579f94d999d0fef3b.js",
    "revision": "2aa3e3d961ce2226e4693f8e86a8354a"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.643ca9fcd1efeabf1e6a.js",
    "revision": "ea0a03de53e216b0bcbe13285d33bb42"
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
