import React, { Component } from "react";
import {
  Icon,
  Input,
  Button,
  Checkbox,
} from "semantic-ui-react";
import { auth, db } from "../../api/firebase/index";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import UserContext from "../components/UserContext";



const createUser = gql`
  mutation createUser {
    createUser {
      _id
    }
  }
`;

const initState = {
  email: "",
  password: "",
  checkbox: false
};

const Userform = () => {
  class userform extends Component {
    constructor(props) {
      super(props);
      this.handleCheck.bind(this);
      this.handleSubmit.bind(this);

      this.state = {
        ...initState
      };
    }

    handleSubmit(e) {
      const error = null;
      const { email, password } = this.state;
      const { history } = this.props;

      e.preventDefault();

      auth.createUser(email, password)
        .then(user => {
          console.log(user)
          db.doCreateUser(email,user.user.uid);
          history.push("/HouseBoarding");
        })
        .catch(err => {
          this.setState({ err: err });
          console.log(err);
        });
    }

    handlePassword(e) {
      this.setState({
        password: e.target.value
      });
    }

    handleEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
    handleUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
    handleCheck() {
      this.setState(previousState => ({
        checkbox: !previousState.checkbox
      }));
    }
    render() {
      const { email, pass, checkbox } = this.state;
      const isVailid = email === "" || pass === "" || checkbox === false;

      return (
        <form className="userForm  animated fadeInUp ">
          <Icon
            size="huge"
            style={{ color: "black", margin: "auto" }}
            name="address book outline"
          />
          Just need two thing
          <Input
            transparent
            icon="users"
            iconPosition="left"
            value={this.state.email}
            onChange={this.handleEmail.bind(this)}
            placeholder="Email"
          />
          <Input
            transparent
            icon="chain"
            iconPosition="left"
            value={this.state.password}
            type="password"
            onChange={this.handlePassword.bind(this)}
            placeholder="Password"
          />
          <Checkbox
            onChange={() => this.handleCheck()}
            label="I agree to the Terms and Conditions"
          />
          <Button
            disabled={isVailid}
            onClick={e => this.handleSubmit(e)}
            type="submit"
          >
            Submit
          </Button>
        </form>
      );
    }
  }

  return withRouter(userform);
};

export default graphql(createUser, { name: "CreateUser" })(Userform());
