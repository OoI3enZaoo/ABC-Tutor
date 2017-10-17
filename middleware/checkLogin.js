export default function ({store,isServer,req,route,redirect}){
  if (isServer && !req) return
  if (store.state.isLogin == false) {
    if (route.path == '/home') {
      redirect('/')
    }
  }
}
