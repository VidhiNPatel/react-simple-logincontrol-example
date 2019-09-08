import React, { Component } from 'react';

export default class LogoutButton extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log('Logout button clicked');
    this.props.handleLogoutClick();
  }
  render(){
    return(
      <button onClick={this.handleClick}>Logout</button>
    )
  }
}