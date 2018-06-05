import React, { Component } from 'react';
import {db} from '../../startup/firebase'
import {withRouter} from 'react-router-dom'

import {Icon} from 'semantic-ui-react'

 const UserSplash = ()=>{

class userSplash extends Component {

    constructor(props) {
        super(props);
        this.state={
            home:null,
            name:null
        }
    }
    

    componentDidMount(){
            
    }

    render() {
        const{home,name} = this.state

        return (
            <div className='splash' >
                <h1>Welcome to your home</h1>
         Tools help make managing you home easy

            <div className='splash-container' >
                <HomeAvatar  />     
            </div>
            </div>
        );
    }
    }
    return withRouter(userSplash)
}
const HomeAvatar = ({home,name})=>{
return <div className="card">
        {home? 
    <div >
        <Icon name='home'  />
        <h2>{name}</h2>
    </div>: 
    <div>
        <h2>Add Home</h2>
        <Icon name='plus'/>
    </div>}
    </div>

}

export default UserSplash();