import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card';
import styles from './Grid.css'
const GridCountry = () => {

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
                // <Box sx={{ flexGrow: 1 }}>
                // <Grid container spacing={2} >
                  <div key ={xcount.cca3}  >
                    <Card name={xcount.name.common} image ={xcount.flags.png}/>
                  </div>
            //     </Grid>
            //   </Box>
                
            )
        )

        }</div>
  )
    }

export default GridCountry;