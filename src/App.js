import React, { Component } from 'react';
import NewsListContainer from './containers/NewsListContainer'


class App extends Component {
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
