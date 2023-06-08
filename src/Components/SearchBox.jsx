import React, { useState } from 'react'
import "./SearchBox.css"
import {countries} from "../Countries"
import {useDispatch, useSelector} from "react-redux"
import img1 from "../Assets/weather images/partly_cloudy.png"
import img2 from "../Assets/weather images/cloudy_night.png"

const SearchBox = () => {
    const dispath = useDispatch();
    const [country , changeCountry] = useState("")
    const [city , changeCity] = useState("")
    const [fontsmall , changefontSmall] = useState("weather-app-title")
    const [imgsmall , changeimgSmall] = useState("head-img-class")
    const a = useSelector(state=>state.custom)
    let headimg = img1;

    if(a.bgTitle==='nightBg'){
        changefontSmall("weather-app-title-night")
        headimg = img2;
    }

  return (
    <div className="search-box">
        <div className="head-box">
            <h1 className={fontsmall} >Weather App</h1>
            <img className={imgsmall} src={headimg} alt="" />
        </div>
        
        <header>
            <label htmlFor="city"></label>
            <input onChange={(e)=>{changeCity(e.target.value)}} type="text" placeholder='Enter Your City' />
            <select onChange={(e)=>{changeCountry({selectValue:e.target.value})}} name="country" id="">
            <option value="default">Select Your Country</option>
                {
                    countries.map((item,index)=>{
                        return(
                            <option key={index} value={item.code}>{item.name}</option>
                        )
                    })
                }
            </select>
        </header>
        <button onClick={()=>{
            dispath({
                    type:"changeSearch",
                    payload:1,
                })
            dispath({
                type:'changeCountry',
                payload:country
            })
            dispath({
                type:'changeCity',
                payload:city
            })

            changeimgSmall("head-img-class-small")

            if(a.bgTitle==='nightBg'){
                changefontSmall("weather-app-title-small-night")
            }
            else{
                changefontSmall("weather-app-title-small")
            }
        }}>Search</button>
    </div>
  )
}

export default SearchBox