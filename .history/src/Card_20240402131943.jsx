import React from 'react'
import styles from './Card.css'

const Card = ({name, image}) => {
  return (
    <div>
        <img src= {image} alt='no image'/>
        <h2>{name}</p>

    </div>
  )
}

export default Card