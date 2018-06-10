import Homes from "./home";

export default {
  Query: {
    homes() {
      Homes.find({}).fetch();
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
