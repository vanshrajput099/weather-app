import React from 'react'
import "./App.css"
import SearchBox from './Components/SearchBox'
import {useSelector} from 'react-redux'
import ResultBox from './Components/ResultBox'


const App = () => {
  const a = useSelector(state=>state.custom)
  let classname = "outer-body"

  if(a.bgTitle==="morningBg"){
    classname="outer-body"
  }

  else{
    classname="outer-body-night"
  }
  
  return (
    <div style={{backgroundImage:`url(${a.bgPic})`}}  className={classname}>
        <SearchBox />
        {
          a.search? <>
                    <ResultBox />
                  </>:
          <>
          </>
        }
     </div>
  )
}

export default App