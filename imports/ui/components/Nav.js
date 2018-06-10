import React, { Component } from 'react';
import {
    Image,
    Menu,
    Button,
    MenuItem,
    Icon,
    Divider,
    Item
  } from "semantic-ui-react";
    import {auth} from '../../api/firebase'

class Nav extends Component {

    constructor(props) {
        super(props);
                
    }

    logUserOut(){
      auth.getLoggedOut()
    }

    render() {
        const activeItem = this.props.activeItem
        return (
            <div className="dashboard-Nav">

          <Menu vertical  secondary>

          <Item>  
            <Menu.Header> My Home  <Icon name='home'/></Menu.Header>   
            <Divider/>
            <Menu.Item
              name="Bills"
              active={activeItem === "Bills"}
              onClick={this.props.handleItemClick}
            />
            <Menu.Item
              name="Hardware"
              active={activeItem === "Hardware"}
              onClick={this.props
              .handleItemClick}
            />
            <Menu.Item
              name="Market"
              active={activeItem === "Market"}
              onClick={this.props.handleItemClick}
            />
          
          </Item>

            <Divider/>
            <Menu.Item
              icon="globe"
              name="Services"
              active={activeItem === "Services"}
              onClick={this.props.handleItemClick}
            />
            <Divider/>
            <Menu.Item
              icon="s15"
              name="Neighborhood"
              active={activeItem === "Neighborhood"}
              onClick={this.props.handleItemClick}
            />
            <Divider/>
            <Menu.Item
              icon="user"
              name="Household"
              active={activeItem === "Household"}
              onClick={this.props.handleItemClick}
            />
            <Divider/>
            <br />
            <Button onClick={this.logUserOut} >Logout</Button>
          </Menu>

        </div>
        );
    }
}

export default Nav;