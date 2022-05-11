import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PokemonCard from '/components/PokemonCard'
import SickButton from '../components/SickButton'

export class Home extends React.Component {
	static async getInitialProps() {
		let data = await fetch("https://studiousapi.up.railway.app/pokedata/data/random?limit=20")
		let pokemons = await data.json()
		return { pokemons }
	}

	render() {
		return (
			<div className={styles.container}>
				<Head>
				<title>PokeData</title>
				<meta name="description" content="A WebApp Showcasing Stats of Various Pokemons" />
				<link rel="icon" href="/icon.png" />
				</Head>
				<main>
					<div className="container-mt-5">
						<center>
							<h1 className={styles.title}>PokeData</h1>
							<h2>A WebApp Showcasing Stats of Various Pokemons</h2>
							<SickButton link='/search' name='Search'/>
						</center>
						<div className={styles.cards}>
							{this.props.pokemons.map(pokemon => (
							<PokemonCard key={pokemon.name.english} name={pokemon.name.english} image={pokemon.thumbnail} types={pokemon.type} stats={pokemon.base} description={pokemon.description}/>
							))}
						</div>
					</div>
				</main>
			</div>
		)
	}
	}

export default Home