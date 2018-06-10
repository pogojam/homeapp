import React, { Component } from 'react'
import {firebase} from '../../api/firebase'
import UserContext from './UserContext'

const withAuthentication = (Component)=>{

return class WithAuthentication extends Component {
    constructor(props) {
      super(props)
      this.state = {
          authUser:null   
      }
    }

    componentDidMount() {
      this.authListener = this.authListener.bind(this);
      this.authListener();
    }
  

    authListener() {
      firebase.auth.onAuthStateChanged(user => {
        if (user) {
          this.setState({
            authUser: true
          });
        } else {
          this.setState({
            authUser: null
          });
        }
      });
    }    

  render() {
    return (
      <UserContext.Provider value={this.state.authUser} >
          <Component/>
      </UserContext.Provider>
    )
  }
}

}

export default withAuthentication