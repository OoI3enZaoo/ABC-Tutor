import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4ab2933c = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _51144f63 = () => import('..\\pages\\ทด.vue' /* webpackChunkName: "pages\\ทด" */).then(m => m.default || m)
const _31f4814a = () => import('..\\pages\\test2.vue' /* webpackChunkName: "pages\\test2" */).then(m => m.default || m)
const _8fff5e3c = () => import('..\\pages\\tutor\\index.vue' /* webpackChunkName: "pages\\tutor\\index" */).then(m => m.default || m)
const _9be6a9ae = () => import('..\\pages\\settings.vue' /* webpackChunkName: "pages\\settings" */).then(m => m.default || m)
const _2ef2a678 = () => import('..\\pages\\inspire.vue' /* webpackChunkName: "pages\\inspire" */).then(m => m.default || m)
const _746632db = () => import('..\\pages\\signout.vue' /* webpackChunkName: "pages\\signout" */).then(m => m.default || m)
const _46e816c1 = () => import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages\\course\\index" */).then(m => m.default || m)
const _145a3653 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages\\login" */).then(m => m.default || m)
const _6fbe161c = () => import('..\\pages\\tutor\\create.vue' /* webpackChunkName: "pages\\tutor\\create" */).then(m => m.default || m)
const _5f4cd485 = () => import('..\\pages\\tutor\\manage\\_id.vue' /* webpackChunkName: "pages\\tutor\\manage\\_id" */).then(m => m.default || m)
const _a8d8c78e = () => import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages\\user\\_id" */).then(m => m.default || m)
const _fb3bd478 = () => import('..\\pages\\allcourse\\_id.vue' /* webpackChunkName: "pages\\allcourse\\_id" */).then(m => m.default || m)
const _b1c07708 = () => import('..\\pages\\allcourse\\_branchId\\index.vue' /* webpackChunkName: "pages\\allcourse\\_branchId\\index" */).then(m => m.default || m)
const _c235720e = () => import('..\\pages\\course\\_id\\index.vue' /* webpackChunkName: "pages\\course\\_id\\index" */).then(m => m.default || m)
const _b362a486 = () => import('..\\pages\\mycourse\\_id.vue' /* webpackChunkName: "pages\\mycourse\\_id" */).then(m => m.default || m)
const _57875de6 = () => import('..\\pages\\mycourse\\_id.vue\\index.vue' /* webpackChunkName: "pages\\mycourse\\_id.vue\\index" */).then(m => m.default || m)
const _01b17558 = () => import('..\\pages\\search\\_keyword.vue' /* webpackChunkName: "pages\\search\\_keyword" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _4ab2933c,
			name: "index"
		},
		{
			path: "/ทด",
			component: _51144f63,
			name: "ทด"
		},
		{
			path: "/test2",
			component: _31f4814a,
			name: "test2"
		},
		{
			path: "/tutor",
			component: _8fff5e3c,
			name: "tutor"
		},
		{
			path: "/settings",
			component: _9be6a9ae,
			name: "settings"
		},
		{
			path: "/inspire",
			component: _2ef2a678,
			name: "inspire"
		},
		{
			path: "/signout",
			component: _746632db,
			name: "signout"
		},
		{
			path: "/course",
			component: _46e816c1,
			name: "course"
		},
		{
			path: "/login",
			component: _145a3653,
			name: "login"
		},
		{
			path: "/tutor/create",
			component: _6fbe161c,
			name: "tutor-create"
		},
		{
			path: "/tutor/manage/:id?",
			component: _5f4cd485,
			name: "tutor-manage-id"
		},
		{
			path: "/user/:id?",
			component: _a8d8c78e,
			name: "user-id"
		},
		{
			path: "/allcourse/:id?",
			component: _fb3bd478,
			name: "allcourse-id"
		},
		{
			path: "/allcourse/:branchId?",
			component: _b1c07708,
			name: "allcourse-branchId"
		},
		{
			path: "/course/:id",
			component: _c235720e,
			name: "course-id"
		},
		{
			path: "/mycourse/:id?",
			component: _b362a486,
			name: "mycourse-id"
		},
		{
			path: "/mycourse/:id.vue?",
			component: _57875de6,
			name: "mycourse-id.vue"
		},
		{
			path: "/search/:keyword?",
			component: _01b17558,
			name: "search-keyword"
		}
    ],
    fallback: false
  })
}
