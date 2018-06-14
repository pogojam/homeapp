
export default {
  Query: {
    User({ uid }) {
      return userRef(uid).then(doc => doc.data());
    }
  }
};
