import React, { Component } from "react";
import { Radio,Icon, Input, Button } from "semantic-ui-react";
import { Link, Route , withRouter } from "react-router-dom";

import { Redirect } from "react-router";
import {auth} from '../../api/firebase'

let initState = {
  pass: "",
  email: ""
};

const Login = ({history})=>{
return  <Loginform history={history} ></Loginform>
}


class Loginform extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit.bind(this);
    this.state = {
      ...initState
    };
    
  }


  // form handlers
  handleUser(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePass(e) {
    this.setState({
      pass: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    const {email,pass} = this.state
    const {history} = this.props

    auth.getLoggedIn(email, pass)
    .then(
      ()=> {history.push('./HouseDash')}
      )
      .catch(error => {
      ()=>{this.setState({ error: error });}
      });
  }

  render() {

    const { pass, email,user } = this.state;

    const isInvalid = email === "" || pass === "";

    return (


      <form className="loginForm animated fadeIn ">
          <Icon size="huge"  style={{color:'black',margin:'auto' }} name="user circle"  />
          <Input
            iconPosition="left"
            transparent
            icon="users"
            className="loginForm-input"
            type="email"
            onChange={this.handleUser.bind(this)}
            placeholder="Email"
          />
          <Input
            type="password"
            iconPosition="left"
            transparent
            icon="chain"
            transparent
            className="loginForm-input"
            onChange={this.handlePass.bind(this)}
            placeholder="Password"
          />
          <Button
            disabled={isInvalid}
            onClick={ (e)=> { this.handleSubmit(e) }}
           >
            Login
          </Button>
          {this.state.error}
          <Link to={"/userForm"}>New User</Link>
      </form>
    );
  }
}

const LoginPage = withRouter(Login)

export default LoginPage