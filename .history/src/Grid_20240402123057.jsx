import React, { useEffect, useState } from 'react'
// import axios from 'axios'

const Grid = () => {

    const [country, setCountry]= useState([])

    useEffect(
        ()=>{
            const fetchData = async ()=>{
                try{
                    const res =  await fetch(' https://restcountries.com/v3.1/all');
                    const countries = await res.json();
                    setCountry(countries)

                    // setCountry(data.data)


                }
                catch(e){
                    console.log(e)
                }

            }
            fetchData();
        },[]
    )

  return (
    // <div>
    //     {/* {country} */}
    // </div>
    
    <div>{
        country.map(
            xcount=> (
                <li> {xcount.name.common}</li>
            )
        )

        }</div>
  )
}

export default Grid