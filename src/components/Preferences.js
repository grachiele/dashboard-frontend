import React from 'react'

class Preferences extends React.Component {

  constructor(){
    super();

  }

  handleSubmit = () => {
    // this.props.callbackFunction
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
				<label>Zipcode</label>
				<input type="number" onChange={this.handleZipCodeChange} value={this.props.user.zipcode}/>
				<input id="news" type="checkbox" onChange={this.handleNewsChange} value={this.props.user.news} />
				<label>News</label>
				<input id="weather" type="checkbox" onChange={this.handleWeatherChange} value={this.props.user.weather} />
				<label>Weather</label>
				<input type="submit"/>
			</form>
    )
  }
}

export default Preferences
