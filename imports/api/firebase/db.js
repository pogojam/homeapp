import {db} from './server'

console.log(process.env.FIREBASE_KEY)

export const doCreateUser  = (email,id)=>{
    db.collection('users').doc(id).set({
        email:email,
        houses:[]
    })
}

export const onceGetUsers = (uid) =>{
   return db.collection('users').doc(uid)
}

// homes

export const addhHome = ()=>{

}


