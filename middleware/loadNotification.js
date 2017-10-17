export default function ({store,isServer,req,route,redirect}){
  if (isServer && !req) return
  store.dispatch('FETCH_COURSE_PURCHASED')
}
