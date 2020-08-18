import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import {Login} from './Components/loginComponent';
import {Home} from './Components/homeComponent';
import {SignUp} from './Components/signupComponent';
import {Agreement} from './Components/agreementComponent';

export default class App extends Component {

  render() {
    return (
        <Router>
          <Stack key="root">
            <Scene key="home" component={Home} title="Home" />
            <Scene key="login" component={Login} title="Login" />
            <Scene key="agreement" component={Agreement} title="Agreement" />
            <Scene key="signup" component={SignUp} title="Sign Up" />          
          </Stack>
        </Router>
    );
  }
}
