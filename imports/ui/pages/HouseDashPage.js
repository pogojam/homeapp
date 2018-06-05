import React, {ReactDOM, Component } from "react";
import {Bills,Hardware,Household,Market,Neighborhood,Services} from '../components/Dashboard';
import withAuthorization from '../components/withAuthorization'


import {
  Image,
  Radio,
  Menu,
  Divider,
  Segment,
  Icon,
  Label,
  Input,
  Button,
  Form,
  Checkbox
} from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Nav from '../components/Nav'



const initState = {};


 class houseDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Bills"
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  handleLogout(){
   

  }
  render() {

    const loggedIn = this.props.authenticated

    const { activeItem,messages } = this.state;

    return (
      <div className="dashboard animated fadeInUp">
        <Nav handleItemClick={this.handleItemClick.bind(this)} activeItem={activeItem} />
        <div className="dashboard-Panel">
          {activeItem === "Bills" && <Bills />}
          {activeItem === "Hardware" && <Hardware/>}
          {activeItem === "Neighborhood" && <Neighborhood/>}
          {activeItem === "Services" && <Services/>}
          {activeItem === "Household" && <Household/>}
        </div>
      </div>
    );
  }
}
const authCondition = (authUser)=>!!authUser
const HouseDash = withAuthorization(authCondition)(houseDash)


export default HouseDash



// Functional Components abstract out for stand alone component
