import * as Firebase from 'firebase'
let firebaseApp = null
if (!Firebase.apps.length) {
  const init = {
    apiKey: 'AIzaSyCmnwFqZkanrzDQ2h-5Rv2rersBqrDxm7Q',
    authDomain: 'tutor-dafcf.firebaseapp.com',
    databaseURL: 'https://tutor-dafcf.firebaseio.com',
    projectId: 'tutor-dafcf',
    storageBucket: 'tutor-dafcf.appspot.com',
    messagingSenderId: '1004495049428'
  }
  firebaseApp = Firebase.initializeApp(init)
}
export const db = firebaseApp.database()
export const dbAuth = firebaseApp.auth()
