import React, {Component}  from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class FreeIp extends React.Component {

	render() {
		
		return(
				<section>
				<div className="logo"><Link to="/" title="GeoLocation App" alt="GeoLocation App"><img src="/assets/images/mysitelogo@400x-100.png" alt="Where in the World is My Site?" title="Where in the World is My Site?" /></Link></div>
				<div className="row">
					<div className="col-sm-3" />
						<div className="col-sm-6">
						<h1>What is Free Geo Ip Service?</h1>
						<p>Freegeoip.net provides a public HTTP API for software developers to search the geolocation of IP addresses. It uses a database of IP addresses that are associated to cities along with other relevant information like time zone, latitude and longitude.</p>
				
						<p>You're allowed up to 15,000 queries per hour by default. Once this limit is reached, all of your requests will result in HTTP 403, forbidden, until your quota is cleared.</p>

						<p>The freegeoip web server is free and open source so if the public service limit is a problem for you, download it and run your own instance.</p>
					</div>
					<div className="col-sm-3" />
				</div>
				</section>
		)
	}
}

export default FreeIp;
