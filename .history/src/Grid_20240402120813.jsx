import React from 'react'
import axios from 'axios'
export const Grid = () => {

    const data = axios.get('https://restcountries.com/v3.1/all')
    const country = data.data 
    
    


  return (
    <div>Grid</div>
  )
}
