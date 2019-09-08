import React, { Component } from 'react';

export default class LoginButton extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick(){
    console.log('login button clicked');
    this.props.handleLoginClick()
  }
  render(){
    return(
      <button onClick = {this.handleClick}>Login</button>
    )
  }
}