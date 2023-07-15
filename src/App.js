import { useState } from 'react';
import './App.css';
import Details from './Components/Details/Details';
import WeatherStats from './Components/WeatherStats/WeatherStats';
import { Routes , Route, BrowserRouter as Router } from 'react-router-dom';

let time = new Date()
let timeNow = time.getHours()

let backgroundClass = "App ImageDay"

if(timeNow >= 20){
  backgroundClass = "App ImageNight"
}

function App() {
  const [data, setData] = useState(null);
  const [searching , changeSearching ] = useState(false)
  return (
    <div className={backgroundClass}>
      { !searching ? 
        <Details 
          dataSet = {setData}
          search = {changeSearching}
         /> : 
         <WeatherStats 
          data={data} 
          setData = {setData}   
          setSearch = {changeSearching}
         />
      }
    </div>
  );
}

export default App;
