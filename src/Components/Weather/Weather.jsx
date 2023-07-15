import React, { useEffect, useRef } from 'react'
import "./Weather.css"

import CanvasJSReact from '@canvasjs/react-charts';
import WeatherCard from '../WeatherCard/WeatherCard';

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

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

let time = new Date()
let timeNow = time.getHours()

let textClass1 = "other-info-heading"
let textClass2 = "other-info-data"

let night = false;

if(timeNow >= 20){
  textClass1 = "other-info-heading-night"
  textClass2 = "other-info-data-night"
  night = true;
}

const Weather = ({api , city}) => {

  let height = 0
  
  let x = api.days[0].icon;
  let icon = sun

  switch(x){
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

  if(window.innerWidth<=425)
  {
    height = 250;
  }

  let countryName = api.resolvedAddress;
  let finalCountryName = "";

  for(let i=0;i<countryName.length;i++)
  {
    if(countryName.charAt(i)==","){
      break;
    }

    finalCountryName+=countryName.charAt(i)
  }

  let address = finalCountryName + "," + city

  let daysArr = [];

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date();
  let dayName = days[d.getDay()];

  for(let i=0;i<6;i++){
    daysArr.push(api.days[i+1])
  }

  let dataPoints2 = [];

  for(let i=0;i<24;i+=2){
    dataPoints2.push({x:i , y:api.days[0].hours[i].temp ,color:"white"})
  }

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    responsive: true,
    backgroundColor: "transparent",
    title:{
      fontColor:"white",
      fontFamily: 'Belanosima',
      text: "Temperature"
    },
    axisY: {
      labelFontColor: night? "white" : "black",
    },
    axisX: {
      labelFontColor: night? "white" : "black",
      title: "Time",
      interval: 2
    },
    height:height,
    data: [{
      color:  night? "white" : "black",
      type: "line",
      toolTipContent: "Week {x}: {y}%",
      dataPoints: dataPoints2
    }]
  } 

  return (
    <div className="weather-box-outside">

        <div className="weather-box-header">
            <div className="left-header">
                <h1 className='left-header-h1'>{address}</h1>
                <h1 className='left-header-day'>{dayName}</h1>
                <p className='left-header-p'>{api.days[0].description}</p>
            </div>

            <div className="right-header">
              <div className="header-data-div">
                <div className="right-header-data">
                  <h1 className='right-header-h1'>{api.days[0].temp}°C</h1>
                  <h1 className='right-header-h1-min-max'>{api.days[0].tempmin}°C | {api.days[0].tempmax}°C</h1>
                </div>
                  <img className='right-header-img' src={icon} alt="" />
              </div>
            </div>
        </div>

        <div className="other-info-section">
          <div className="other-info">
            <span className='other-info-span'> <span className={textClass1}>Humidity :</span> <span className={textClass2}> {api.days[0].humidity} </span></span>
            <span className='other-info-span'> <span className={textClass1}>Pressure :</span> <span className={textClass2}>  {api.days[0].pressure} </span></span>
            <span className='other-info-span'> <span className={textClass1}>Visibility :</span> <span className={textClass2}> {api.days[0].visibility} </span></span>
          </div>
        </div>

        

        <div className="weather-box-section-1">
          
            <div className='section-1-graph'>
                <CanvasJSChart options = {options}/>
            </div>

            <div className="weather-box-section-2">
              {
                daysArr.map((value,index)=>{
                  return(
                    <WeatherCard 
                      key={index}
                      icon = {api.days[index].icon}
                      date = {daysArr[index].datetime}
                      temp = {daysArr[index].temp}
                      tempMin = {daysArr[index].tempmin} 
                      tempMax = {daysArr[index].tempmax} 
                      desc = {api.days[index].conditions}
                    />
                  )
                })
              }
          </div>
        </div>
    </div>
  )
}

export default Weather