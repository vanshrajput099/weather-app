import React from 'react'
import "./WeatherCard.css"
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
import fog from "../../Assets/Weather-Images/icons8-cloud-96.png"

const WeatherCard = ({tempMin , tempMax ,day, date , temp ,desc , icon}) => {
  let smallDays = ['Sun' , 'Mon' , 'Tues' , 'Wed' , 'Thurs' , 'Fri' , 'Sat']
  let d = new Date(date);
  let dayName = smallDays[d.getDay()];

  let time = new Date()
  let timeNow = time.getHours()
  let night = false;

  let colourClass1 = "weather-h3"
  let colourClass2 = "weather-h1"

  if(timeNow >= 20){
    colourClass1 = "weather-h3-night"
    colourClass2 = "weather-h1-night"
    night = true;
  }

  console.log(icon)

  switch(icon){
    case 'rain':
      icon = rainClouds
      break;

    case 'snow':
      icon = snow
      break;

    case 'snow-showers-day':
      icon = snowSunny
      break;

    case "snow-showers-night":
      icon = snow
      break;

    case "thunder-rain":
      if(night){
        icon = stormnight
      }
      else{
        icon = stormday
      }
      break;

    case "thunder-showers-day":
      icon = stormday
      break;

    case "thunder-showers-night":
      icon = stormnight
      break;

    case "showers-day":
      icon = sunnyRainClouds
      break;

    case "showers-night":
      icon = rainNight
      break;

    case "fog":
      icon = fog
      break;

    case "wind":
      icon = cloudy
      break;

    case "cloudy":
      icon = cloudy;
      break;

    case "partly-cloudy-day":
      icon = partlyCloudyDay
      break;

    case "partly-cloudy-night":
      icon = cloudyNight
      break;

    case "clear-day":
      icon = sun
      break;

    case "clear-night":
      icon = cloudyNight
      break;
  }

  return (
    <div className="weather-card">
      <div className="header-card-info">
        <h1 className={colourClass2}>{dayName}</h1>
        <img className='weather-img' src={icon} alt="" />
      </div>
        <h3 className={colourClass1}>{temp}°C <br /> {desc}</h3>

    </div>
  )
}

export default WeatherCard