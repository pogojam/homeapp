import React, { Component } from 'react';
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import withAuthentication from './components/WithAuthentication';
import * as PAGE from './pages'



class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() { 

    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition timeout={600} classNames="fade" key={location.key}>
                <Switch location={location}>
                  <Route exact path={"/"} component={PAGE.SplashPage} />
                  <Route exact path={"/Login"} component={PAGE.UserLogin}/>
                  <Route exact path={"/UserForm"} component={PAGE.UserForm} />
                  <Route exact path={"/HouseDash"} component={PAGE.HouseDash}/>
                  <Route exact path={"/userSplash"} component={PAGE.HouseBoarding}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

const houseQuery = gql`
{
    house
}
`


const App =  withAuthentication(AppComponent);


export default graphql(houseQuery)(App)

