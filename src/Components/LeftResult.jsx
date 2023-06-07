import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import "./LeftResult.css"
import {Chart as ChartJs,
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement } from 'chart.js'
import { useSelector } from 'react-redux'

//Image Imports

import clear_night from "../Assets/weather images/clear_night.png"
import cloud_lightning from "../Assets/weather images/cloud_lightning.png"
import clouds from "../Assets/weather images/clouds.png"
import cloudy_night from "../Assets/weather images/cloudy_night.png"
import cloudy from "../Assets/weather images/cloudy.png"
import haze from "../Assets/weather images/haze.png"
import partly_cloudy from "../Assets/weather images/partly_cloudy.png"
import rain_cloud from "../Assets/weather images/rain_cloud.png"
import rain from "../Assets/weather images/rain.png"
import snow_rain from "../Assets/weather images/snow_rain.png"
import snow_storm from "../Assets/weather images/snow_storm.png"
import snow from "../Assets/weather images/snow.png"
import storm from "../Assets/weather images/storm.png"
import stormy from "../Assets/weather images/stormy.png"
import sunny from "../Assets/weather images/sunny.png"

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

//Days Array
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const LeftResult = (props) => {

    const a = useSelector(state=>state.custom)
    const time = new Date()
    const dayNo = time.getDay()
    const arr = []
    const arr2 = []
    const dataArray = props.dataArr;
    let img = sunny;

    //Graph Data
    for(let i=0;i<dataArray.days[0].hours.length;i++){
        arr.push(dataArray.days[0].hours[i].datetime)
        arr2.push(dataArray.days[0].hours[i].temp)
    }

    //Image Selection
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

    changeWeatherPic(dataArray.days[0].icon);


    //Graph Attributes
    const data = {
        labels: arr,
        datasets: [{
            label: 'Temperature',
            data: arr2,
            backgroundColor:'white',
            borderColor:'black',
            fill:true,
            tension:0.2,
        }]
    }

    const options = {
        plugins: {
            legent:true
        },
        scales: {
            x: {
              ticks: {
                color: 'white',
                borderColor: 'black', // Change x-axis text color here
              },
            },
            y: {
              ticks: {
                color: 'white',
                borderColor: 'black', // Change y-axis text color here
              },
            },
          },
    }

  return (
    <div className="left-result-box">

            <header>
                <div className="header-info">
                    <img src={img} alt="" />
                    <div className="info">
                        <h1 className='day-info'>{(a.city).toUpperCase()} ,{a.country.selectValue}</h1>
                        <h2 className='date-info'>{days[dayNo]}</h2>
                        <p className='description-header'>{dataArray.days[0].description}</p>
                    </div>
                </div>         
            </header>
            
            <main>
                <h1>{dataArray.days[0].temp}°C</h1>
                <div className="span-Box">
                    <span className='temp-info-span'> {dataArray.days[0].tempmin}°C </span> <span className='min-max'> Min </span> 
                    <span> | </span> 
                    <span className='temp-info-span'> {dataArray.days[0].tempmax}°C </span> <span className='min-max'> Max </span>
                </div>
                
            </main>

            <div className="graph-box">
                    <Line
                    data={data}
                    options={options}>
                    </Line>
            </div>
        </div>
  )
}

export default LeftResult