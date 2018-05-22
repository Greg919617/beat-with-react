// import React from 'react'
import AppBar from 'material-ui/AppBar';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';






import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
//import Payments from './StripeBilling';



class Login extends Component {
    static muiName = 'FlatButton';
  
    render() {
      return (
        <FlatButton {...this.props} label="Login" />
      );
    }
  }
  
  const Logged = (props) => (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Subscribe" />
      <MenuItem primaryText="Calender" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  );
  
  Logged.muiName = 'IconMenu';
  
  /**
   * This example is taking advantage of the composability of the `AppBar`
   * to render different components depending on the application state.
   */
  class AppBarExampleComposition extends Component {
    state = {
      logged: true,
    };
  
    handleChange = (event, logged) => {
      this.setState({logged: logged});
    };
  
    render() {
      return (
        <div>
          <Toggle
            label="Logged"
            defaultToggled={true}
            onToggle={this.handleChange}
            labelPosition="right"
            style={{margin: 20}}
          />
          <AppBar
            title="Lees Lights & Sounds"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
          />
        </div>
      );
    }
  }
  
  export default AppBarExampleComposition;

//  const NavBar = () => <AppBar  id = "style" title="Lees Lights & Sounds" />;


// export default NavBar;
