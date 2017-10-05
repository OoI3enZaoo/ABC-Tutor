export default function ({store,isServer,req,route,redirect}){
  if (isServer && !req) return
console.log('islogin: ' + store.state.isLogin)
console.log('route.pat: ' + route.path)
  if (store.state.isLogin == false) {
    if (route.path == '/home') {
      redirect('/')
    }
  }
}
