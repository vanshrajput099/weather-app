import React from 'react'
import "./RightResult.css"
import NextDay from './NextDayCards/NextDay'
import { useSelector } from 'react-redux'

const RightResult = (props) => {
    const dataArray = props.dataArr;
    const a = useSelector(state=>state.custom)

    let class_name = "right-result-box"
    if(a.bgTitle==='nightBg'){
        class_name="right-result-header-night"
    }

  return (
    <div className={class_name}>
            <header className='right-result-header'>
                <h1 className='other-info-head'>Other Informations</h1>
                <div className="infos">
                    <div className="info-box">
                        <h2 >Humidity</h2>
                        <p>{dataArray.days[0].humidity}</p>
                    </div>
                    <div className="info-box">
                        <h2 >Pressure</h2>
                        <p>{dataArray.days[0].pressure}</p>
                    </div>
                    <div className="info-box">
                        <h2 >Visibility</h2>
                        <p>{dataArray.days[0].visibility}</p>
                    </div>
                </div>
            </header>

            <div className="next-day-card-box">
                <NextDay 
                    data={dataArray.days[1]}  />
                <NextDay 
                    data={dataArray.days[2]} />
            </div>
        </div>
  )
}

export default RightResult