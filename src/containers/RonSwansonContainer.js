import React from 'react'
import Quote from '../components/Quote'

class RonSwansonContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      quote: ""
    }
  }

  fetchQuote = () => {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((response) => response.json())
    .then((respJSON) => {
      this.setState({
        quote: respJSON[0]
      })
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <Quote quote={this.state.quote}/>
      </div>
    )
  }
}

export default RonSwansonContainer
