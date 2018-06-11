import { db } from "../firebase/server";
import { doTypesOverlap } from "graphql";
import Homes from "../home/home";

const userRef = uid =>
  db
    .collection("users")
    .doc(uid)
    .get()
    ;


    userRef('ySbiTSQi8uMlxRD6HlkpvDfhZe02').then(doc => console.log(doc.data()))

export default {



  Query:{
    User(args){
     return userRef(args).then(doc => doc.data())
    }  
  }


};
