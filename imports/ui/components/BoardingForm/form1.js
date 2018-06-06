import React, { Component } from 'react';

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