import React, {Component}  from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class GeoLocation extends React.Component {

	render() {
		
		return(
				<section>
					<div className="logo"><Link to="/" title="GeoLocation App" alt="GeoLocation App"><img src="/assets/images/mysitelogo@400x-100.png" alt="Where in the World is My Site?" title="Where in the World is My Site?" /></Link></div>
					<div className="row">
						<div className="col-sm-3" />
						<div className="col-sm-6">
							<h1>What is Geo Location?</h1>
							
							<p>Geolocation is the wireless detection of the physical location of a remote device. As a noun, geolocation refers to the physical location itself; as a verb, the term refers to the process of detecting that location.
							</p>

							<p>Depending on the method used, a geolocation can be as general as the continent the user is connecting from or as specific as his geographic position, defined as latitude and longitude coordinates, or sometimes latitude, longitude plus altitude. Location is a less specific attribute, such as, for example, New York City's Central Park or Boston's North End.
							</p>
						</div>
						<div className="col-sm-3" />
					</div>
				</section>
		)
	}
}

export default GeoLocation;