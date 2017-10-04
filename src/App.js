import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import LogIn from './components/LogIn';
import { Container, Segment } from 'semantic-ui-react';
import WidgetsContainer from './containers/WidgetsContainer';
import Authorize from './components/Authorize';
import Preferences from './components/Preferences';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';


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
      localStorage.setItem('jwtToken', respJSON.jwt)
      this.setState({
        user: respJSON.user,
        isLoggedIn: true
      })
    })
  }

  updatePreferences = (preferencesParams) => {
    fetch("http://localhost:3000/update", {
      method: 'PATCH',
      body: JSON.stringify(preferencesParams),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('jwtToken')
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((respJSON) => {
      console.log("respJSON UPDATE",respJSON)
      return this.setState({
        user: respJSON,
      }, () => console.log("update", this.state))
    })
  }

  fetchUserInfo() {
    if (localStorage.getItem('jwtToken')) {
      return fetch("http://localhost:3000/welcome", {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('jwtToken')
        }
      })
      .then((resp) => {
        return resp.json();
      })
      .then((respJSON) => {
        if (respJSON.id) {
          this.setState({
            isLoggedIn: true,
            user: respJSON
          })
        } else {
          // redirect to login or something
        }

      })
    } else {
      console.log("no jwtToken found in localStorage")
    }
  }

  componentDidMount() {
    this.fetchUserInfo()
  }

  logOutUser = () => {
    localStorage.removeItem("jwtToken");
    this.setState({
      user: null,
      isLoggedIn: false
    })

  }

  signUpUser = (signUpParams) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: 'post',
      body: JSON.stringify(signUpParams),
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
    const AuthWidget = Authorize(WidgetsContainer, this.state.user)
    const AuthLogIn = Authorize(LogIn)
    const AuthPreferences = Authorize(Preferences, this.state.user)
    const AuthSignUp = Authorize(SignUp, this.state.user)

    return (
      // need to pass isLoggedIn into navbar to determine which links to show
      <Container>
        <Segment>
          <NavBar logOutUser={this.logOutUser} isLoggedIn={this.state.isLoggedIn}/>
        </Segment>
        <Segment>
          <Switch>
            <Route path='/login' render={(props) => <AuthLogIn logInUser={this.logInUser} {...props} />} />
            <Route path='/home' render={(props) => <AuthWidget fetchUserInfo={this.fetchUserInfo} user={this.state.user} {...props} />}/>
            <Route path='/preferences' render={(props) => <AuthPreferences updatePreferences={this.updatePreferences} user={this.state.user} {...props} />}/>
            <Route path='/signup' render={(props) => <AuthSignUp signUpUser={this.signUpUser} {...props} />}/>
            <Route path='/' render={() => <h1>404 not found</h1>} />
          </Switch>
        </Segment>
      </Container>
    );
  }
}

export default App;
