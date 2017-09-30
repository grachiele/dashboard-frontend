import React, { Component } from 'react';
// import NewsListContainer from './containers/NewsListContainer';
// import WeatherContainer from './containers/WeatherContainer';

import {Route} from 'react-router-dom';
import LogIn from './components/LogIn';
// import { Container } from 'semantic-ui-react';
import WidgetsContainer from './containers/WidgetsContainer';


class App extends Component {

// this needs to have call to our own backend
// so as to pass shouldRender down to each container?
  constructor(){
    super()

    this.state = {
      user: null,
      isLoggedIn: false
    }
  }

  logInUser = (logInParams) => {
    fetch("http://localhost:3000/login", {
      method: 'post',
      body: JSON.stringify(logInParams),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((respJSON) => {
      console.log(respJSON)
      localStorage.setItem('jwtToken', respJSON.jwt)
      this.setState({
        user: respJSON.user,
        isLoggedIn: true
      })
    })
  }

  render() {
    console.log("this.state: ", this.state)



    if (this.state.isLoggedIn) {
      console.log("gettin there")
      return (
        <Route path='/home' render={() => <WidgetsContainer user={this.state.user} />}/>
      );
    } else {
      return (
        <Route path='/login' render={() => <LogIn logInUser={this.logInUser} />} />
      );
    }

    // return (
    //   <Container>
    //     <Route path='/login' render={() => <LogIn logInUser={this.logInUser} />} />
    //     <Route path='/home' render={() => <WidgetsContainer user={this.state.user} />}/>
    //   </Container>
    // );
  }
}

export default App;
