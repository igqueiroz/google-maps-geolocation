import Menus from './Menus'
import React, {Component}  from 'react'


export const Top = ( { children } ) =>
	<div className="page">
		<Menus />
		{ children }
	</div>


export const Oooppsss404 = ( { location }) =>
	<div className="container">
		<Menus />
		<h1>Oooppsss, this page is not on the way (404 Error)</h1>
		<p>Não achamos { location.pathname }</p>
	</div>

