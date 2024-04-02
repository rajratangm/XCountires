import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card';

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
                <StyledBox>
      <Grid container spacing={2}>
        {countries.map(country => (
          <Grid key={country.cca3} item xs={6} md={3}>
            <Card name={country.name.common} image={country.flags[0]} />
          </Grid>
        ))}
      </Grid>
    </StyledBox>
                
            )
        )

        }</div>
  )
    }

export default GridCountry;