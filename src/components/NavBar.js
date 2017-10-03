import React from 'react';
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
 
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
 
/* add the navbar component */
const NavBar = (props) => {
  
// -------- // need to receive isLoggedIn as props to determine which links to show
	let content = null;

	if (props.isLoggedIn) {
		content = (
			<div>
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
	    	</div>
		);
	} else {
		content = (
			<div>
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
		    </div>
		);
	}

  return (content);

}

export default NavBar;

