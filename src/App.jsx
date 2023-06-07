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

  const {bgPic,search} = useSelector(state=>state.custom)
  return (
    <div style={{backgroundImage:`url(${bgPic})`}}  className={classname}>
        <SearchBox />
        {
          search? <>
                    <ResultBox />
                  </>:
          <>
          </>
        }
     </div>
  )
}

export default App