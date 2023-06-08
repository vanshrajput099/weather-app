import React from 'react'
import "./NextDay.css"
import { useSelector } from 'react-redux'
import clear_night from "../../Assets/weather images/clear_night.png"
import cloud_lightning from "../../Assets/weather images/cloud_lightning.png"
import clouds from "../../Assets/weather images/clouds.png"
import cloudy_night from "../../Assets/weather images/cloudy_night.png"
import cloudy from "../../Assets/weather images/cloudy.png"
import haze from "../../Assets/weather images/haze.png"
import partly_cloudy from "../../Assets/weather images/partly_cloudy.png"
import rain_cloud from "../../Assets/weather images/rain_cloud.png"
import rain from "../../Assets/weather images/rain.png"
import snow_rain from "../../Assets/weather images/snow_rain.png"
import snow_storm from "../../Assets/weather images/snow_storm.png"
import snow from "../../Assets/weather images/snow.png"
import storm from "../../Assets/weather images/storm.png"
import stormy from "../../Assets/weather images/stormy.png"
import sunny from "../../Assets/weather images/sunny.png"

const NextDay = (props) => {

    const dataArray = props.data;
    let img = rain;
    const a = useSelector(state=>state.custom)

    function changeWeatherPic(icon){
        switch(icon){
            case 'snow':
                img = snow
                break;

            case 'snow-showers-day':
                img = snow_rain
                break;

            case 'snow-showers-night':
                img = snow_rain
                break;

            case 'thunder-rain':
                img = storm
                break;

            case 'thunder-showers-day':
                img = stormy
                break;

            case 'thunder-showers-night':
                img = storm
                break;

            case 'fog':
                img = haze
                break;

            case 'wind':
                img = haze
                break;

            case 'cloudy':
                img = cloudy
                break;

            case 'partly-cloudy-day':
                img = clouds
                break;

            case 'partly-cloudy-night':
                img = cloudy_night
                break;

            case 'clear-day':
                img = sunny
                break;

            case 'clear-night':
                img = clear_night
                break;

            default:
                img = sunny
                break;
        }
    }

    changeWeatherPic(dataArray.icon);
    let class_name = "next-day-card";

    if(a.bgTitle==='nightBg'){
        class_name = "next-day-card-night";
    }

  return (
    <div className={class_name}>

        <header>
            <img src={img} alt="" />
            <h3>{dataArray.datetime}</h3>
            <h1>{dataArray.temp}°C</h1>
        </header>

        <div className="info-box-next-day">
                <span className='next-day-info-span'>{dataArray.tempmin}°C</span> <span className='min-max'>Min</span> 
                <span> | </span> 
                <span className='next-day-info-span'>{dataArray.tempmax}°C</span> <span className='min-max'>Max</span>
        </div>

        <main className='next-day-main'>
            <div className="next-day-info-box">
                <h3>Humidity</h3>
                <p>{dataArray.humidity}</p>
            </div>

            <div className="next-day-info-box">
                <h3>Pressure</h3>
                <p>{dataArray.pressure}</p>
            </div>

            <div className="next-day-info-box">
                <h3>Visiblity</h3>
                <p>{dataArray.visibility}</p>
            </div>
        </main>
        
        <footer className='next-day-info-footer'>
            <p>{dataArray.description}</p>
        </footer>
    </div>
  )
}

export default NextDay