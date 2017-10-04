import React from 'react'
import { Redirect } from 'react-router-dom'

function Authorize(RenderedComponent, props) {
  return class extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
      if (localStorage.getItem('jwtToken') && this.props.location.pathname !== "/home" && this.props.location.pathname !== "/preferences") {
        return <Redirect to="/home"/>
      } else if (!localStorage.getItem('jwtToken') && this.props.location.pathname !== "/login" && this.props.location.pathname !== '/signup') {
        return <Redirect to="/login"/>
      } else {
        return <RenderedComponent {...this.props} {...props}/>
      }

    }
  }
}

export default Authorize
