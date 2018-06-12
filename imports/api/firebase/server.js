
export const firebase  = require('firebase')
        require('firebase/firestore')
        require('firebase/auth')




const settings = {/* your settings... */ timestampsInSnapshots: true};
  process.env.FIREBASE_KEY = 'AIzaSyCTXoawGfolxLvERwR6CrPXKbo6Ms1FPfc'
console.log(process.env);

 const init = () => {
  let config = {
    apiKey: process.env.FIREBASE_KEY ,
    authDomain: "roomateapp-57fd6.firebaseapp.com",
    databaseURL: "https://roomateapp-57fd6.firebaseio.com",
    projectId: "roomateapp-57fd6",
    storageBucket: "",
    messagingSenderId: "682547868204"
  }
  firebase.initializeApp(config)
  
  console.log('DB up')
}

if(!firebase.apps.length){
  init();
}
const db = firebase.firestore().settings(settings)
const auth = firebase.auth()

export {
  db,
  auth
}




