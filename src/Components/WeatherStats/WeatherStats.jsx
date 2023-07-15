import React, { useEffect, useState } from 'react'
import axios from "axios"
import Weather from '../Weather/Weather';
import "./WeatherStats.css"

const WeatherStats = ({data}) => {

    const [apiError , setapiError] = useState(null);
    const [apiData , setApiData] =  useState(null);

    useEffect(async ()=>{
      const key = "MWD3Y3583B9TR4DMQCNYVT3XZ" 
      try{
        const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data.city},${data.country}?unitGroup=metric&key=MWD3Y3583B9TR4DMQCNYVT3XZ`;
        let res =  await axios.get(URL); 
        setApiData(res.data)
      }   
      
      catch{
        setapiError("Error")
      }
    },[])

    if(apiError==="Error"){
      return(
        <div className="not-found-box">
          <h2>Not Found !!</h2>
          <h3 className='check'>Check Your Entered City / Country And Refresh The Page</h3>
        </div>
      )
    }

    if(apiData===null){
        return <h1 className='loading'>Loading...</h1>
    }

  return (
    <Weather api={apiData} city={data.country}/>
  )
}

export default WeatherStats