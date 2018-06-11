import { db } from "../firebase/server";
import { doTypesOverlap } from "graphql";
import Homes from "../home/home";

const userRef = uid =>
  db
    .collection("users")
    .doc(uid)
    .get();

export default {



  Query:{
    User({uid}){
      return  userRef(uid).then(doc => doc.data())
    }  
  }


};
