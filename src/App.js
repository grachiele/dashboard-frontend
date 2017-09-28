import React, { Component } from 'react';
import NewsListContainer from './containers/NewsListContainer';
import WeatherContainer from './containers/WeatherContainer';


class App extends Component {

// this needs to have call to our own backend 
// so as to pass shouldRender down to each container?

  render() {
    return (
      <div className="App ui right aligned grid">
        <p>You're in the app</p>
        <NewsListContainer />
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
