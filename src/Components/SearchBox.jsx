import React, { useState } from 'react'
import "./SearchBox.css"
import {countries} from "../Countries"
import {useDispatch, useSelector} from "react-redux"

const SearchBox = () => {
    const dispath = useDispatch();
    const [country , changeCountry] = useState("")
    const [city , changeCity] = useState("")
    const [fontsmall , changefontSmall] = useState("weather-app-title")
  return (
    <div className="search-box">
        <h1 className={fontsmall} >Weather App</h1>
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
            changefontSmall("weather-app-title-small")
            console.log(fontsmall)

        }}>Search</button>
    </div>
  )
}

export default SearchBox