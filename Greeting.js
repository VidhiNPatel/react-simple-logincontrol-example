import React, { Component } from 'react';

export default class Greeting extends Component {
  render(){
    const isUserLoggedIn = this.props.message;
    let greetingText ;
    
    if(isUserLoggedIn){
      greetingText = 'Welcome Back'
    } else {
      greetingText = 'Please sign up'
    }
    return(
      <p>{greetingText}</p>
    )
  }
}