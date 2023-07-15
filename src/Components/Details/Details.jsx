import React, { useState } from 'react'
import "./Details.css"
import countries from '../../Countries.js'
import sun from "../../Assets/Weather-Images/icons8-sun-96.png"
import stormday from "../../Assets/Weather-Images/icons8-stormy-weather-96.png"
import stormnight from "../../Assets/Weather-Images/icons8-stormy-night-96.png"
import stormHeavyRain from "../../Assets/Weather-Images/icons8-storm-with-heavy-rain-96.png"
import stormRain from "../../Assets/Weather-Images/icons8-storm-96.png"
import snowSunny from "../../Assets/Weather-Images/icons8-snowy-sunny-day-96.png"
import snow from "../../Assets/Weather-Images/icons8-snow-96.png"
import snowSleet from "../../Assets/Weather-Images/icons8-sleet-96.png"
import rainNight from "../../Assets/Weather-Images/icons8-rainy-night-96.png"
import rainfall from "../../Assets/Weather-Images/icons8-rainfall-96.png"
import rainClouds from "../../Assets/Weather-Images/icons8-rain-96.png"
import sunnyRainClouds from "../../Assets/Weather-Images/icons8-rain-cloud-96 (1).png"
import partlyCloudyDay from "../../Assets/Weather-Images/icons8-partly-cloudy-day-96.png"
import noRain from "../../Assets/Weather-Images/icons8-no-rain-96.png"
import nightWind from "../../Assets/Weather-Images/icons8-night-wind-96.png"
import cloudyNight from "../../Assets/Weather-Images/icons8-night-96.png"
import lightSnow from "../../Assets/Weather-Images/icons8-light-snow-96.png"
import cloudy from "../../Assets/Weather-Images/icons8-clouds-96.png"
import cloudLights from "../../Assets/Weather-Images/icons8-cloud-lightning-96.png"


//Setting Icons
// snow	Amount of snow is greater than zero
// snow-showers-day	Periods of snow during the day
// snow-showers-night	Periods of snow during the night
// thunder-rain	Thunderstorms throughout the day or night
// thunder-showers-day	Possible thunderstorms throughout the day
// thunder-showers-night	Possible thunderstorms throughout the night
// rain	Amount of rainfall is greater than zero
// showers-day	Rain showers during the day
// showers-night	Rain showers during the night
// fog	Visibility is low (lower than one kilometer or mile)
// wind	Wind speed is high (greater than 30 kph or mph)
// cloudy	Cloud cover is greater than 90% cover
// partly-cloudy-day	Cloud cover is greater than 20% cover during day time.
// partly-cloudy-night	Cloud cover is greater than 20% cover during night time.
// clear-day	Cloud cover is less than 20% cover during day time
// clear-night	Cloud cover is less than 20% cover during night time

const Details = ({dataSet , search}) => {
    let country = "";
    let city = "";

    let icon = sun;
    let time = new Date()
    let timeNow = time.getHours()


    if(timeNow >= 20){
        icon = cloudyNight
    }
    
    const [styleAfter , setstyleAfter] = useState(true)

  function handleClick(e){
    e.preventDefault();
    setstyleAfter(false);
    dataSet({country: country , city:city});
    search(true)
  }

  return (
    <div className= {styleAfter? "details-box" : "details-box-after"}>
        <div className="details-header">
            <h1 className='details-heading'>Bonjour` Forecast</h1>
            <img className='details-img' src={icon} alt="" />
        </div>
        <form className='details-form'>
            <input onChange={(e)=>{city=e.target.value}} className= 'details-input' type="text" placeholder='Enter Your City' />
            <select onChange={(e)=>{country=e.target.value}} className= 'details-select' name="" id="">
                <option value="None">Choose A Country</option>
                {
                    countries.map((value,index)=>{
                        return(
                            <option key={index} value={value.code}>{value.name}</option>
                        )
                    })
                }
            </select>
        </form>
            <button onClick={handleClick} className='details-button'>Search</button>
    </div>
  )
}

export default Details