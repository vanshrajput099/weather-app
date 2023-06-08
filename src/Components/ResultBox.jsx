import React, { useEffect, useState } from 'react'
import "./ResultBox.css"
import sunny from "../Assets/weather images/sunny.png"
import LeftResult from './LeftResult'
import RightResult from './RightResult'
import axios from "axios"
import {useSelector} from 'react-redux'
import searchicon from "../Assets/search-icon.png"

const ResultBox = () => {

  const a = useSelector(state=>state.custom)
  const API = "MWD3Y3583B9TR4DMQCNYVT3XZ"
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/$${a.city}%2C$${a.country.selectValue}?unitGroup=metric&key=${API}`
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  let classname = "outer-body"

  if(a.bgTitle==="morningBg"){
    classname="outer-body"
  }

  else{
    classname="outer-body-night"
  }

  //API CALL
  useEffect(() => {
    fetchData(URL);
  }, [URL]);

  //Api Call Function
  const fetchData = async (URL) => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      setError(error)
    }
  };

  //If Error ?
  if(error){
    return (
      <div className="error-box">
        <p>{error.message}</p>
        <p className='small-error'>Check Your Entered City Or Country</p>
        <p className='small-error'>Refresh The Page !!</p>
      </div>
    );
  }

  //Loading
  if(data===null){
    return (
      <div className="loading-box">
        <p>
          Loading...
        </p>
        <img className='search-icon' src={searchicon} alt="" />
      </div>
    )
  }

  return (
    <div className="result-box">
       <LeftResult dataArr={data} />
        <RightResult dataArr={data} />
    </div>
  )
}

export default ResultBox

