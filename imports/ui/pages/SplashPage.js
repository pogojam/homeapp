import React, { Component } from 'react';
import {Button,Icon} from 'semantic-ui-react'
import Waypoint from 'react-waypoint'
import {Link, withRouter } from 'react-router-dom'
import UserContext from '../components/UserContext'
import {auth} from '../../api/firebase'
import withAuthorization from '../components/withAuthorization';
import {Query} from 'react-apollo'
import gql from 'graphql-tag'


class homeWeb extends Component {

        constructor(props) {
            super(props);
            this.state = {

            }
        }

      
    sectionEnter({previousPostion, viewportTop ,currentPostion}){ 
            let section = this.props.section
            let el = document.getElementById(section)
            let nav = document.getElementById('Nav')
            el.classList.add('slideInLeft')
        }

    render() {
        return (
            <div className='homeWeb' >
                <div className='container' >
                <WithNav user={this.state.user} top={this.state.isTop} />
                    <div className="slider slider-background">
                    <div  >
                            <h1 >Manage your new home</h1>
                            <Button>Add home</Button>
                    </div>
                    </div>
                </div>

                <div id='automation' className='slider  animated ' >
                <Waypoint section='automation' onEnter={this.sectionEnter} />
                    <h1>
                    Track your home 
                    </h1>
                    <Icon name='calendar check outline' size='huge' ></Icon>
                    <br />
                    <p>
                    Set up reminders for trash day or automate payments and scheduling for your pest-control services.
                    </p>
                    <h1>
                    Automate Supplys 
                    </h1>
                        <Icon name='globe' size='huge' ></Icon>
                        <br />
                    <p>
                    Automatically have home supplies ordered and  delivered to your house
                    </p>
                </div>
                    
                <div  className=' slider homeWeb-maintenance animated ' >

                    <Waypoint section='maintenance' onEnter={this.sectionEnter} />
                    <div id='maintenance'  className='animated ' >
                    <h1>
                        Get access to monthly home services
                    </h1>
                    <Icon name='check' size='huge' ></Icon>
                    <br />
                    <p>
                        get access to monthly maid services and other disconted home services harnessing the power of crowdsourcing 
                    </p>
                    <h1>
                    Automate Supplys 
                    </h1>
                        <Icon name='globe' size='huge' ></Icon>
                        <br />
                    <p>
                    Automatically have home supplies ordered and  delivered to your house
                    </p>
                    
                    </div>

                </div>
                <div className='homeWeb-footer' >
                    <ul style={{ marginTop:'1.25em' }} className='ui list' >
                    <h2>Company</h2> 
                    <li>about</li>
                    </ul>

                    <ul className='ui list'>
                    <h2>Investors</h2> 
                    <li>business plan</li>
                    <li>markets</li>
                    <li>questions</li>
                    </ul>

                    <ul className='ui list' >
                    <h2> Social </h2>
                    <li>facebook <Icon name='facebook' /> </li>
                    <li>instagram <Icon name='instagram' /> </li>
                    <li>snap <Icon name='snapchat' /> </li>
                    </ul>
                    
                </div>
            </div>
        );
    }
}



class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 100;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      }
    


render(){
    const {isTop} = this.state
    const {history} = this.props
    const style={display: 'block', height: '100%'}

    return <div className={isTop ?'homeWeb-Nav':'homeWeb-Nav scroll'} id='Nav' >
     <svg className=' logoWeb animated fadeInDown' width="63px" height="57px" viewBox="0 0 63 57"  >
            <defs></defs>
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="AppLogo" strokeWidth="5">
                    <g id="Combined-Shape">
                        <path d="M2.5,23.5403828 L2.5,24.727954 C4.84150174,25.3592477 6.56464216,27.4977816 6.56464216,30.0387764 L6.56464216,45.4178709 C6.56464216,45.5660602 6.56851747,45.7142243 6.57626412,45.862211 C6.82166638,50.5502121 10.8209801,54.1516504 15.5089813,53.9062489 C25.1959875,53.3991643 30.4413694,53.1502773 31.5,53.1502773 C32.5550801,53.1502773 37.7162532,53.3971201 47.2365525,53.9000808 C47.3859,53.9079709 47.5354296,53.911918 47.6849853,53.911918 C52.3794069,53.911918 56.1849875,50.1063374 56.1849875,45.4119161 L56.1849853,30.0387764 C56.1849853,27.4080331 58.0319987,25.2086829 60.5,24.6667513 L60.5,23.7124175 C55.8615596,21.3673657 51.1631933,18.5387262 46.4039869,15.2275893 C41.6452134,11.9167536 36.6388717,7.99357014 31.3828001,3.45785381 L15.747662,15.1759133 L15.581949,15.2899939 L2.5,23.5403828 Z"></path>
                    </g>
                </g>
            </g>
        </svg>

        <UserContext.Consumer>
          { (authUser)=> authUser? <Button onClick={auth.getLoggedOut} >Logout</Button>:<Button  onClick={ ()=>history.push('/login') } > Login</Button> }
        </UserContext.Consumer>
        <UserContext.Consumer>
          { (authUser)=> authUser? <Button onClick={ ()=>history.push('./HouseDash') } >MyDash</Button>:null }
        </UserContext.Consumer>
            <Button onClick={ ()=>history.push('/userForm') } >SignUp </Button>
            <Button  onClick={ ()=>history.push('/help') } > Help </Button>
    </div>}
}



const WithNav = withRouter(Nav)


export default homeWeb;