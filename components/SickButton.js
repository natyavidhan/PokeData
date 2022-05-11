import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

function SickButton(props) {
  return (
      <Link href={props.link}>
        <a  className="btn btn-outline-dark">{props.name}</a>
      </Link>
  )
}

SickButton.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string
}

export default SickButton
