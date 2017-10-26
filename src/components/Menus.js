import React, {Component}  from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import '../stylesheets/ui.scss'
import 'bootstrap'


class Menus extends React.Component {

	render() {
		
		return(
				<section className="bg-primary">
					<div className="container">	     
					    <nav className="navbar navbar-default">
							<div className="container-fluid">
							  	<Link to="/" title="GeoLocation App" alt="GeoLocation App"><img className="brand" src="/assets/images/avenue-code-logo-white-horizontal.svg" /></Link>
							    <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
							      <ul className="nav navbar-nav navbar-right">
							        <li className="dropdown" >
						          		<Link to="/" href="/" className="dropdown-toggle js-offcanvas-trigger navbar-toggle collapsed" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
					 						<span className="icon-bar"></span>
					 						<span className="icon-bar"></span>
					 						<span className="icon-bar"></span>	
					 					</Link>
						 				<ul className="dropdown-menu">
						 					<li className="subtotalone noborder"><Link to="/">Home</Link></li>
											<li className="subtotalone noborder"><Link to="/geolocation">What's GeoLocation Services?</Link></li>
											<li className="subtotalonetwo noborder"><Link to="/freeipservice">How my site is localized by this service?</Link></li>
										</ul>
							        </li>
							      </ul>
							    </div>
							</div>
						</nav>
					</div>
				</section>
		)
	}
}

export default Menus;
