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
    "url": "/_nuxt/app.a76063bd907ca1e222fb.js",
    "revision": "cd9929ba95a307c01f9263dc70dee2d5"
  },
  {
    "url": "/_nuxt/common.04cae3b6107aa2b89d96cd6d39e49c38.css",
    "revision": "6f5d0fa32d0d2bbf79bb1c1924519bc4"
  },
  {
    "url": "/_nuxt/common.e7df279cb9b83bfedac3.js",
    "revision": "4f4e771216d6a81638af5f41f0527dda"
  },
  {
    "url": "/_nuxt/layouts/default.530b875b6aff093c8b3e.js",
    "revision": "35c328c83beb6a594fbb32f1fb3b147b"
  },
  {
    "url": "/_nuxt/manifest.32334d3956b3bee7a4f0.js",
    "revision": "55fd6dd94c7cc73def88e2dcf189a638"
  },
  {
    "url": "/_nuxt/pages/allcourse\\_branchId\\index.25765a8beda3aa717318.js",
    "revision": "7901dfcaa7116fb306751ebbd03b3540"
  },
  {
    "url": "/_nuxt/pages/course\\_id\\index.5af0329f26572fc731b8.js",
    "revision": "c086a3425758143552c13f1fd0334dbe"
  },
  {
    "url": "/_nuxt/pages/course\\index.5ddaf02c8bc4838db4f1.js",
    "revision": "c86c773b14d2851906b70199f82dc1c0"
  },
  {
    "url": "/_nuxt/pages/home.039f03b4ff2ef3cdd0d3.js",
    "revision": "48e1cfc05ac7ab782561f00dde69c656"
  },
  {
    "url": "/_nuxt/pages/index.736a7434d54fd7445661.js",
    "revision": "e0fb06fe327f6e7487909c24df5eee16"
  },
  {
    "url": "/_nuxt/pages/login.2096d9382db9a7c78c03.js",
    "revision": "cf30a8756395ebd8bb8bdad1152a795e"
  },
  {
    "url": "/_nuxt/pages/mycourse\\_id.a142cc567350239f57b8.js",
    "revision": "75b8105e16b68942316c70539d8a671c"
  },
  {
    "url": "/_nuxt/pages/register.6d442aad3b5ac4578814.js",
    "revision": "3368200bfc384345a2a566fd93795c39"
  },
  {
    "url": "/_nuxt/pages/search\\_keyword.0bb5913e6c9e024099a8.js",
    "revision": "2acb51e9ececbe84ff485c1845e26698"
  },
  {
    "url": "/_nuxt/pages/settings.45fb0a16e3756571e19f.js",
    "revision": "b4752bdf228d9ff3a29fd2bbe5a9afdb"
  },
  {
    "url": "/_nuxt/pages/signout.98ec61cb133743f2fa32.js",
    "revision": "6eb0ef0841c834c1beb0fa9382bdcbf8"
  },
  {
    "url": "/_nuxt/pages/test.b96b3b98887e7a6360ab.js",
    "revision": "8f411b48b385e0f61a8cdfbdf032b7fb"
  },
  {
    "url": "/_nuxt/pages/tutor\\create.d6921bae5375b2162464.js",
    "revision": "7a6a7161e80e76510d36c51d30f98f28"
  },
  {
    "url": "/_nuxt/pages/user\\_id.c12ef021135c91ec15ca.js",
    "revision": "646c0e50123794513b162487e2adea8f"
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
