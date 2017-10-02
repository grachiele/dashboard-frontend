import React, { Component } from 'react';
// import NewsListContainer from './containers/NewsListContainer';
// import WeatherContainer from './containers/WeatherContainer';

import {Route} from 'react-router-dom';
import LogIn from './components/LogIn';
// import { Container } from 'semantic-ui-react';
import WidgetsContainer from './containers/WidgetsContainer';


class App extends Component {

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

  fetchUserInfo() {
    // move the fetch request into here?
    // just pass decoded jwtToken (which is userID) to fetch from /users/:id ?????
    // need to pass in Authorization header for normal fetch request (not the login)
    /*
      if item exists in local storage
      get token from local storage
      put it into Authorization key of fetch request header
      make fetch request to localhost 3000 /??????

      backend will make sure token is legit
    */
    if (localStorage.getItem('jwtToken')) {
      console.log("before fetch")
      fetch("http://localhost:3000/welcome", {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('jwtToken')
        }
      })
      .then((resp) => {
        console.log("got resp")
        return resp.json();
      })
      .then((respJSON) => {
        console.log("poatto")
        console.log(respJSON);
        // iff user object comes back in respJSN then :
        // -----set state to loggedIn: true, etc.
        // -----change render to work accordingly
        if (respJSON.id) {
          this.setState({
            isLoggedIn: true,
            user: respJSON
          })
        } else {
          // redirect to login or something
        }  
          
      })
      // .then(() => {
      //   console.log(this.state)
      // })
    } else {
      console.log("no jwtToken found in localStorage")
    }
  }

  componentDidMount() {
    console.log("app did mount")
    this.fetchUserInfo();
  }

  logOutUser = () => {
    // fill in --- delete token from local storage, setState
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
