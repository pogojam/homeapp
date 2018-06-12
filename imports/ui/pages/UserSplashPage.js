import React, { Component } from "react";
import { db } from "../../api/firebase";
import { withRouter } from "react-router-dom";
import * as FORMS from "../components/BoardingForm";
import { Icon } from "semantic-ui-react";
import withAuthorization from "../components/withAuthorization";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import UserContext from "../components/UserContext";

const UserHouses = gql`
  query houses($uid: String!) {
    houses(uid: $uid) {
      name
    }
  }
`;

const UserSplash = () => {
  class userSplash extends Component {
    constructor(props) {
      super(props);
      this.state = {
        home: null,
        name: null,
        activeForm: null
      };
    }

    handleChangeForm(num) {
      this.setState({
        activeForm: num
      });
    }

    render() {
      const { activeForm, home, name } = this.state;

      return (
        <div className="houseboarding">
          <div className="splash">
            <h1>Welcome to your home</h1>
            Tools help make managing you home easy
            <div className="splash-container">
              <NewHomeAvatar />
              <UserHomes />
            </div>
          </div>
        </div>
      );
    }
  }
  return withRouter(userSplash);
};

const NewHomeAvatar = () => (
  <div className="card" style={{ height: "100%" }}>
    <h2>Add Home</h2>
    <Icon name="plus" />
  </div>
);

const UserHomes = props => (
  <UserContext.Consumer>
    {userData => {
      const uid = { uid: userData[1] };
      return (
        <Query query={UserHouses} variables={uid}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            if(data) return data.houses.map((data,i) => <HomeAvatar key={i} {...data} />)
            else return null
          }}
        </Query>
      );
    }}
  </UserContext.Consumer>
);


const HomeAvatar = ({ name }) => {
  return (
    <div className="card">
      <Icon name="home" />
      <h2>{name}</h2>
    </div>
  );
};

export default UserSplash();
