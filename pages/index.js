import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokemonCard from '/components/PokemonCard'

export default async function Home() {
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
          {
          await fetch("https://studiousapi.up.railway.app/pokedata/data/random?limit=10")
          .then(res => res.json())
          .then(data => {
            data.map(pokemon => {
              // console.log(pokemon)
              return (
                <PokemonCard name={pokemon.name.english} image={pokemon.thumbnail} types={pokemon.type} stats={pokemon.base} />
              )
            })})}
        </center>
      </main>
    </div>
  )
}
