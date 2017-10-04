import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import RonSwansonQuote from '../components/RonSwansonQuote'

class RonSwansonContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      quote: ""
    }
  }

  componentDidMount() {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((response) => response.json())
    .then((respJSON) => {
      this.setState({
        quote: respJSON[0]
      })
    })
  }

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            Knowledge from Ron Swanson
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <RonSwansonQuote quote={this.state.quote}/>
          </Feed>
        </Card.Content>
      </Card>
    )
  }
}

export default RonSwansonContainer
