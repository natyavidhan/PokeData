import React, { Component } from 'react'
import Head from 'next/head'

export class search extends Component {
	render() {
		return (
			<div>
				<Head>
					<title>Search | PokeData</title>
					<meta name="description" content="A WebApp Showcasing Stats of Various Pokemons" />
					<link rel="icon" href="/icon.png" />
				</Head>
				<div className="mt-5 container">
					<div className="text-center">
						<h1>Search</h1>
						<div className="input-group mb-3">
							<input type="text" className="form-control" id='search-input' />
							<button className="btn btn-outline-dark" type="button" id="button-addon2">Button</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default search