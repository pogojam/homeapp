import {auth} from './server'

export const createUser = (email,password)=>{
   return  auth.createUserWithEmailAndPassword(email,password)
  }
  
  export const getLoggedIn = (email,pass)=>{
  return  auth.signInWithEmailAndPassword(email,pass)
  }

  export const getLoggedOut = ()=>{
  return auth.signOut()
  }