import {createReducer} from "@reduxjs/toolkit"

import morningBg from "../Assets/morning.jpg"
import noonBg from "../Assets/noon.jpg"
import nightBg from "../Assets/night.jpg"

let time = new Date();
let bg=morningBg
let bgtitle = ""

if(time.getHours() > 5 && time.getHours()< 16){
    bg=morningBg
    bgtitle = "morningBg"
}

else if(time.getHours() >16 && time.getHours() < 20){
    bg=noonBg
    bgtitle = "noonBg"
}

else{
    bg=nightBg
    bgtitle = "nightBg"
}

const initialState = {
    city:"",
    country:"",
    bgPic :bg,
    search : 0,
    bgTitle : bgtitle,
}

export const customReducer = createReducer(initialState , {
    changeCity : (state,action) =>{
        state.city = action.payload
    },
    
    changeCountry : (state,action) =>{
        state.country = action.payload
    },
    changeSearch : (state,action) =>{
        state.search = action.payload
    }
})