
export const firebase  = require('firebase')
        require('firebase/firestore')
        require('firebase/auth')

    

const settings = {/* your settings... */ timestampsInSnapshots: true};

 const init = () => {
  let config = {
    apiKey: Meteor.settings.public.firebase.KEY ,
    authDomain: "roomateapp-57fd6.firebaseapp.com",
    databaseURL: "https://roomateapp-57fd6.firebaseio.com",
    projectId: "roomateapp-57fd6",
    storageBucket: "",
    messagingSenderId: "682547868204"
  }
  firebase.initializeApp(config)
  firebase.firestore().settings(settings)
  console.log('DB up')
}

if(!firebase.apps.length){
  init();
}
const db = firebase.firestore()
const auth = firebase.auth()

export {
  db,
  auth
}




