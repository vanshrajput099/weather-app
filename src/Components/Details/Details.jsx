import React, { useState } from 'react'
import "./Details.css"
import countries from '../../Countries.js'
import sun from "../../Assets/Weather-Images/icons8-sun-96.png"
import cloudyNight from "../../Assets/Weather-Images/icons8-night-96.png"


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