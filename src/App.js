import React, { Component } from 'react';
import NewsListContainer from './containers/NewsListContainer';
import WeatherContainer from './containers/WeatherContainer';
import { BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import LogIn from './components/LogIn'
import { Container } from 'semantic-ui-react';


class App extends Component {

// this needs to have call to our own backend
// so as to pass shouldRender down to each container?
  constructor(){
    super()

    this.state = {
      user: null
    }
  }

  // logIn = (event) => {
  //
  // }

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
        user: respJSON.user
      })
    })
  }



  componentDidMount(){
    // had to comment out all the authorization stuff on the backend
    // you also need to db:reset
    // it was just getting a redirect to '/welcome' when I did a fetch and that route didn't exist.
    // I put two users in the database to test whether I could set state based on which user was hit.
    // comment out one and uncomment the other to see how it handles it.
    // it's connecting to the backend api we just need to fix the authorization issue.
    // I don't think it should be anything too crazy
    // Probably should look at adding routes.
    // An index page would be good with option to 'sign up' && 'sign in'

    // fetch('http://localhost:3000/api/v1/users/1')
    // .then((response) => response.json())
    // .then((newResponse) => {
    //   this.setState({
    //     id: newResponse.id,
    //     zipcode: newResponse.zipcode,
    //     news: newResponse.news,
    //     weather: newResponse.weather
    //   })
    // })
  }

  //   fetch('http://localhost:3000/api/v1/users/2')
  //   .then((response) => response.json())
  //   .then((newResponse) => {
  //     this.setState({
  //       zipcode: newResponse.zipcode,
  //       news: newResponse.news,
  //       weather: newResponse.weather
  //     })
  //   })
  // }

  render() {
    console.log("this.state: ", this.state)
    return (
      <Container>
        <Router>
          <Route path='/login' render={() => <LogIn logInUser={this.logInUser} />} />
        </Router>
        <p>You're in the app</p>
        {this.state.user ? <NewsListContainer />: null}
        {this.state.user ? <WeatherContainer />: null}
      </Container>
    );
  }
}

export default App;
