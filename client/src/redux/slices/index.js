import {combineReducers} from '@reduxjs/toolkit'
import configurationSlice from './configurationSlice'
import sitesSlice from './sitesSlice'


const rootReducer = combineReducers({
    configuration: configurationSlice,
    sites: sitesSlice
})



export default rootReducer