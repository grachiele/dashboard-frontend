import React from 'react'
import { Redirect } from 'react-router-dom'

class Preferences extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.user
  }

  handleSubmit = () => {
    // this.props.callbackFunction
  }

  // handle zipcode
  handleZipCodeChange = (event) => {
    this.setState({
      zipcode: event.target.value
    })
  }


  // handle weather
  handleWeatherChange = (event) => {
    this.setState({
      weather: !this.state.weather
    })
    console.log(event.target.value)
    console.log("State", this.state)
  }

  // handle news
  handleNewsChange = (event) => {
    this.setState({
      news: !this.state.news
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updatePreferences({
      zipcode: this.state.zipcode,
      weather: this.state.weather,
      news: this.state.news
    })
    this.setState({
      submitted: true
    })
  }

  render(){
    if (this.props.user) {
      return (
        <form onSubmit={this.handleSubmit}>
  				<label>Zipcode</label>
  				<input type="number" onChange={this.handleZipCodeChange} value={this.state.zipcode}/>
  				<input id="news" type="checkbox" defaultChecked={this.state.news} onChange={this.handleNewsChange} value={this.state.news} />
  				<label>News</label>
  				<input id="weather" type="checkbox" defaultChecked={this.state.weather} onChange={this.handleWeatherChange} value={this.state.weather} />
  				<label>Weather</label>
  				<input type="submit"/>
  			</form>
      )
    } else {
      return null
    }
  }
}

export default Preferences
