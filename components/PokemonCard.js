import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/pokemon.module.css'

function PokemonCard(props) {
  let { name, image, types, stats } = props
  if (!stats){
    stats = {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
    }
  }
  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <h2>{types} Type</h2>
      <div className={styles.stats}>
        HP: {stats.HP}
        <br />
        Attack: {stats.Attack}
        <br />
        Defense: {stats.Defense}
        <br />
        Speed: {stats.Speed}
      </div>
    </div>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  stats: PropTypes.object
}

export default PokemonCard
