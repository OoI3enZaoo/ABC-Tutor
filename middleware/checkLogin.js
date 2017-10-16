export default function ({store,isServer,req,route,redirect}){
  if (isServer && !req) return
console.log('islogin: ' + store.state.isLogin)
console.log('route.pat: ' + route.path)
  if (store.state.branchs.length == 0) {
    store.dispatch('PULL_BRANCHS')
  }
  if (store.state.isLogin == false) {
    if (route.path == '/home') {
      redirect('/')
    }
  }
}
