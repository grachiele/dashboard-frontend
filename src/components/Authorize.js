import React from 'react'
import { Redirect } from 'react-router-dom'

function Authorize(RenderedComponent, props) {
  return class extends React.Component {

    render() {
      if (localStorage.getItem('jwtToken') && this.props.location.pathname !== "/home" && this.props.location.pathname !== "/preferences") {
        console.log("first condition", this.props.location.pathname)
        return <Redirect to="/home"/>
      } else if (!localStorage.getItem('jwtToken') && this.props.location.pathname !== "/login" && this.props.location.pathname !== '/signup') {
        console.log("2nd condition", this.props.location.pathname)
        return <Redirect to="/login"/>
      } else {
        console.log("else", this.props.location.pathname)
        return <RenderedComponent {...this.props} {...props}/>
      }

    }
  }
}

export default Authorize
