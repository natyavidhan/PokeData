import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/pokemon.module.css'

function PokemonCard(props) {
  let { name, image, types, stats } = props
  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <h2>{types} Type</h2>
      <div className={styles.stats}>
        HP: {stats.hp}
        <br />
        Attack: {stats.attack}
        <br />
        Defense: {stats.defense}
        <br />
        Speed: {stats.speed}
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
