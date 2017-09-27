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
    "url": "/_nuxt/app.6bb38536108a46562454.js",
    "revision": "87c9ae7630c0d10e29717f4710b6041d"
  },
  {
    "url": "/_nuxt/common.ec35cf21966e51eb6632b096b3eb2d56.css",
    "revision": "e50f86c416fd33468ccd3db6438160df"
  },
  {
    "url": "/_nuxt/common.f5739b0f764a5e3c375f.js",
    "revision": "ba47561ca4c719abdf7a938fb0fafc2f"
  },
  {
    "url": "/_nuxt/layouts/default.6481840a0b5551909551.js",
    "revision": "9b8843fd4d963f093e97976159d5fbfb"
  },
  {
    "url": "/_nuxt/manifest.099860b2be0eed80ac89.js",
    "revision": "786c7bfa31e028c6cad91d49b9453c95"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.90279472ec773363d98c.js",
    "revision": "9fe26647b86297e4d444af58760ba372"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_id.da13310ef819a6f9f520.js",
    "revision": "0443c3e546e6006cf7b96b25bf54ebbb"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.65e6b7d6647fb48f3ff8.js",
    "revision": "8888e59845f77eb05de0d2c3f9b66cc6"
  },
  {
    "url": "/_nuxt/pages/course\\index.000f927031decd7fd855.js",
    "revision": "9ca2c99517bc5d544adf22f66d1852fc"
  },
  {
    "url": "/_nuxt/pages/index.9474fc5b9b997d12062e.js",
    "revision": "ec484b30451a73803ea4479c4eb41387"
  },
  {
    "url": "/_nuxt/pages/inspire.1b4d6cdc8e61878863b9.js",
    "revision": "f18c931600b8a2c7d891222c38be2155"
  },
  {
    "url": "/_nuxt/pages/login.feef825f0898e3762192.js",
    "revision": "64225597bbbadb7377fd6d51400e6bb0"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.bbef0e51a89d1e2400b9.js",
    "revision": "b1d9b8e526a39ba081c43f4173a831b4"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.c31841934d6de273344f.js",
    "revision": "87c08f64178868ce14b2af937826af48"
  },
  {
    "url": "/_nuxt/pages/settings.8b912dde2ee7913d09bb.js",
    "revision": "6df953c4d49803f18de6bea618256c88"
  },
  {
    "url": "/_nuxt/pages/signout.d54379fa13e8b7bfdfd4.js",
    "revision": "b6fee17468d9a25487f50e9052414170"
  },
  {
    "url": "/_nuxt/pages/test2.fa4e1ab22d758d66d399.js",
    "revision": "7d3f2177821456cd97dfe2ff26efff4c"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.d9e84f7c51bfe8903d55.js",
    "revision": "072bddb0caa9ccd93c71cf9c648546a0"
  },
  {
    "url": "/_nuxt/pages/tutor\\index.ef41132530e220ec3ce6.js",
    "revision": "66e858e4bbd9e9a3caee7d68d09cf002"
  },
  {
    "url": "/_nuxt/pages/tutor\\manage\\_id.897ed273737c44a2c91e.js",
    "revision": "7d84490a77ef4fb4ab9e283ff2d05ca0"
  },
  {
    "url": "/_nuxt/pages/user\\_id.e02a4556a5e8d43cb0a4.js",
    "revision": "26cd080ab268f03bdbbcb7be7c98ce8c"
  },
  {
    "url": "/_nuxt/pages/ทด.52c55e4ee7b90f3c654d.js",
    "revision": "5fb95c4818590e2b47a50e30da3237f5"
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
