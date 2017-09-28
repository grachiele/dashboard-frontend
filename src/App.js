import React, { Component } from 'react';
import NewsListContainer from './containers/NewsListContainer'


class App extends Component {

// this needs to have call to our own backend 
// so as to pass shouldRender down to each container?

  render() {
    return (
      <div className="App">
        <p>You're in the app</p>
        <NewsListContainer />
      </div>
    );
  }
}

export default App;
