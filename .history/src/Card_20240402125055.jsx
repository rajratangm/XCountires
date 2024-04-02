import React from 'react'

const Card = ({name, image}) => {
  return (
    <div>
        <img src= {image}/>
        <p>{name}</p>

    </div>
  )
}

export default Card