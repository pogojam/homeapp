import React, { Component } from "react";
import { db } from "../../startup/firebase";
import { withRouter } from "react-router-dom";
import * as FORMS from '../components/BoardingForm'
import { Icon } from "semantic-ui-react";

const UserSplash = () => {
  class userSplash extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        home: null,
        name: null,
        activeForm:null
      };
    }

    handleChangeForm (num){
        this.setState({
            activeForm:num
        })
    }
    componentDidMount() {}

    render() {
      const {  activeForm,home, name } = this.state;

      return (
        <div className="houseboarding">
        <div className="splash">
          <h1>Welcome to your home</h1>
          Tools help make managing you home easy
          <div className="splash-container">
            {!activeForm && <Nonactiveform handleChangeForm={this.handleChangeForm.bind(this)} />}
            {activeForm === 1 && <FORMS.form1/> }
            {activeForm === 2 && <FORMS.form2/> } 
          </div>
        </div>
        </div>
      );
    }
  }
  return withRouter(userSplash);
};

const Nonactiveform = (props)=>(
      <HomeAvatar {...props} />
)


const HomeAvatar = ({ handleChangeForm, home, name }) => {
  return (
    <div className="card">
      {home ? (
        <div>
          <Icon name="home" />
          <h2>{name}</h2>
        </div>
      ) : (
        <div style={{ height:'100%' }} onClick={()=>handleChangeForm(1)} >
          <h2>Add Home</h2>
          <Icon name="plus" />
        </div>
      )}
    </div>
  );
};

export default UserSplash();
