import {db} from './server'


export const doCreateUser  = (email,id)=>{
    db.collection('users').doc(id).set({
        email:email
    })
}

export const onceGetUsers = () =>{
    db.collection('users').get()
}

// homes

export const addhHome = ()=>{

}


