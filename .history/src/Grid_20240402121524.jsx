import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Grid = () => {

    const [country, setCountry]= useState('')

    useEffect(
        ()=>{
            const fetchData = async ()=>{
                try{
                    axios.get(' https://restcountries.com/v3.1/all')


                }
                catch(e){
                    console.log(e)
                }

            }
        },[]
    )
    


  return (
    <div>Grid</div>
  )
}
