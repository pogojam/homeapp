import React, { Component } from 'react';
import {Query} from 'react-apollo';
import {gql} from 'graphql'
import search_address from '../../../api/mcassesors/mcassesors'



search_address('8346 E Glenrosa ave').then(data=>console.log(data))
 
class form1 extends Component {
    render() {
        return (
                <form className='houseboarding-form' action="">
                    <input type="text" placeholder='address' />
                    <input type="text" placeholder='Home Name' />
                    <div className="ui  button "> enter</div>
                </form>
        );
    }
}

export default form1;