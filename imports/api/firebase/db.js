import {db} from './server'


export const doCreateUser  = (email,id)=>{
    db.collection('users').doc(id).set({
        email:email
    })
}

export const onceGetUsers = (uid) =>{
   return db.collection('users').doc(uid)
}

// homes

export const addhHome = ()=>{

}


