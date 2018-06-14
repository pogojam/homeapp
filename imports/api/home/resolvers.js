import Homes from "./home";
import { db } from "../../firebase";

export default {
  Query: {
    houses(obj, { uid }, context) {
      return db
        .onceGetUsers(uid)
        .get()
        .then(doc => doc.data().houses);
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
