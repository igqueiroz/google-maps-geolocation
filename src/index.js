import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Top, Oooppsss404} from './components/'
import FreeIp from './components/FreeIp' 
import GeoLocation from './components/GeoLocation'
import Gmap from './components/Gmap' 

window.React = React

render(
	<Router history={hashHistory}>
		<Route component={Top}>
			<Route path="/"  component={Gmap} />
			<Route path="/geolocation" component={GeoLocation} />
			<Route path="/freeipservice" component={FreeIp} />
		</Route>
		<Route path="*" component={Oooppsss404} />
	</Router>,
	document.querySelector('#react-container')
)