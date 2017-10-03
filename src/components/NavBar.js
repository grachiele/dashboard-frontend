import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

 
/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  cursor: 'pointer'
}
 
const NavBar = (props) => {
  	let content = null;
	if (props.isLoggedIn) {
		content = (
			<Container>
				<NavLink 
				    to="/home"
				    exact
				    style={link}
				    activeStyle={{
				        background: 'darkblue'
				    }}
				>Home</NavLink>
				<NavLink 
	      			to="/preferences"
	      			exact
	      			style={link}
	      			activeStyle={{
	        			background: 'darkblue'
	      			}}
	    		>Preferences</NavLink>
	    		<NavLink 
	      			to="/login"
	      			exact
	      			style={link}
	      			onClick={props.logOutUser}
	      			activeStyle={{
	        			background: 'darkblue'
	      			}}
	    		>Logout</NavLink>
	    	</Container>
		);
	} else {
		content = (
			<Container>
				<NavLink 
			    	to="/login"
			    	exact
			    	style={link}
			      	activeStyle={{
			        	background: 'darkblue'
			      	}}
			    >Login</NavLink>
			    <NavLink 
			      	to="/signup"
			      	exact
			      	style={link}
			      	activeStyle={{
			        	background: 'darkblue'
			      	}}
			    >Sign Up</NavLink>
		    </Container>
		);
	}

  return (content);

}

export default NavBar;

