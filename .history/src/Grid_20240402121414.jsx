import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Grid = () => {

    const [country, setCountry]= useState('')

    useEffect(
        ()=>{
            const fetchData = async ()=>{
                axios.get(' https://restcountries.com/v3.1/all')
                
            }
        }
    )

 

    


  return (
    <div>Grid</div>
  )
}
