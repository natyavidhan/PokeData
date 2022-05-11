import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/pokemon.module.css'

function PokemonCard(props) {
  return (
    <div className={styles.card}>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <h2>{props.type} Type</h2>
      <div className={styles.stats}>
        HP: {props.stats.hp}
        <br />
        Attack: {props.stats.attack}
        <br />
        Defense: {props.stats.defense}
        <br />
        Speed: {props.stats.speed}
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
