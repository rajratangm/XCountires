import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Grid = () => {

    const [country, setCountry]= useState([])

    useEffect(
        ()=>{
            const fetchData = async ()=>{
                try{
                    const data =  await fetcj(' https://restcountries.com/v3.1/all');
                    setCountry(data.data)


                }
                catch(e){
                    console.log(e)
                }

            }
            fetchData();
        },[]
    )

  return (
    <div>{
        country.map(
            xcount=> (
                <li> {xcount.name}</li>
            )
        )

        }</div>
  )
}

export default Grid