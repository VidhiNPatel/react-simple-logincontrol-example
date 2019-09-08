import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';
import './style.css';

class LoginControl extends Component {
 constructor(props){
   super(props);
   this.state = {
     isLoggedIn : false
   }
   this.handleLoginClick = this.handleLoginClick.bind(this);
   this.handleLogoutClick = this.handleLogoutClick.bind(this);
 }

 handleLoginClick() {
   this.setState({
     isLoggedIn : true
   })
 }

  handleLogoutClick() {
   this.setState({
     isLoggedIn : false
   })
 }

 render(){
   let button;
   let isUserLoggedIn = this.state.isLoggedIn;

   if(isUserLoggedIn){
     button = <LogoutButton handleLogoutClick = {this.handleLogoutClick} />
   } else {
     button =  <LoginButton handleLoginClick = {this.handleLoginClick}/>
   }
   return(
     <div>
        <Greeting message = {this.state.isLoggedIn}/>
        {button}
     </div>
   )
 }
}

render(<LoginControl />, document.getElementById('root'));
