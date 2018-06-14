import React, { Component } from "react";
import { db } from "../../firebase";
import { withRouter } from "react-router-dom";
import {Boardingform} from '../components/BoardingForm'
import { Icon } from "semantic-ui-react";
import withAuthorization from "../components/withAuthorization";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import UserContext from "../components/UserContext";

// Graph QL PASSED

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
        <UserContext.Consumer>
          {userData => (
            <div className="houseboarding">
              <div className="splash">
                <h1>Welcome to your home</h1>
                Tools help make managing you home easy
                <div className="splash-container">
                  
                  { activeForm? <Boardingform/>:
                  <div className="splash-container" >
                    <NewHomeAvatar />
                  <UserHomes userData={userData} />
                  </div>
                  }

                </div>
              </div>
            </div>
          )}
        </UserContext.Consumer>
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

const UserHomes = props => {
  const uid = { uid: props.userData[1] };

  if (uid.uid === undefined) return null;
  else
    return (
      <Query query={UserHouses} variables={uid}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          if (data)
            return data.houses.map((data, i) => (
              <HomeAvatar key={i} {...data} />
            ));
          else return null;
        }}
      </Query>
    );
};

const HomeAvatar = ({ name }) => {
  return (
    <div className="card">
      <Icon name="home" />
      <h2>{name}</h2>
    </div>
  );
};

export default UserSplash();
