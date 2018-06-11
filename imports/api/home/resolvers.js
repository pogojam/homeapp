import Homes from "./home";
import {db} from '../firebase'




export default {
  Query: {
    Homes(uid) {
    
    }
  },
  Mutation: {
    createHome() {
      Homes.insert({
        name: "insert Test home"
      });
    }
  }
};
