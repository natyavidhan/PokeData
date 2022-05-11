import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokemonCard from '/components/PokemonCard'
import React, { PureComponent } from 'react'

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
              <center>
                <h1 className={styles.title}>PokeData</h1>
                <h2>A WebApp Showcasing Stats of Various Pokemons</h2>
              </center>
              <div className={styles.cards}>
                {this.props.pokemons.map(pokemon => (
                  <PokemonCard key={pokemon.name.english} name={pokemon.name.english} image={pokemon.thumbnail} types={pokemon.type} stats={pokemon.base} description={pokemon.description}/>
                ))}
              </div>
            </main>
          </div>
    )
  }
}

export default Home