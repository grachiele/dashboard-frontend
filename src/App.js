import React, { Component } from 'react';
import NewsListContainer from './containers/NewsListContainer';
import WeatherContainer from './containers/WeatherContainer';


class App extends Component {

// this needs to have call to our own backend
// so as to pass shouldRender down to each container?
  constructor(){
    super()

    this.state = {
      zipcode: "",
      news: null,
      weather: null
    }
  }

  componentDidMount(){
    // had to comment out all the authorization stuff on the backend
    // it was just getting a redirect to '/welcome' when I did a fetch and that route didn't exist.
    // I put two users in the database to test whether I could set state based on which user was hit.
    // comment out one and uncomment the other to see how it handles it.
    // it's connecting to the backend api we just need to fix the authorization issue.
    // I don't think it should be anything too crazy
    // Probably should look at adding routes.
    // An index page would be good with option to 'sign up' && 'sign in'

    fetch('http://localhost:3000/api/v1/users/1')
    .then((response) => response.json())
    .then((newResponse) => {
      this.setState({
        zipcode: newResponse.zipcode,
        news: newResponse.news,
        weather: newResponse.weather
      })
    })
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
      <div className="App ui right aligned grid">
        <p>You're in the app</p>
        {this.state.news ? <NewsListContainer />: null}
        {this.state.weather ? <WeatherContainer />: null}
      </div>
    );
  }
}

export default App;
