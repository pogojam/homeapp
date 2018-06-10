import { db } from "../firebase/server";
import { doTypesOverlap } from "graphql";
import Homes from "../home/home";

const userRef = uid =>
  db
    .collection("users")
    .doc(uid)
    .get()
    .then(doc => doc.data());

export default {



  Query:{
    Users(uid){
      return  userRef(uid)
    }  
  }


};
