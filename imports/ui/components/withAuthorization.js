import React from 'react';
import { withRouter } from 'react-router-dom';

import UserContext from './UserContext'
import { firebase } from '../../api/firebase';


const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push('/login');
        }
      });
    }

    render() {
      return (
        <UserContext.Consumer>
          {authUser => authUser ? <Component /> : null}
        </UserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;