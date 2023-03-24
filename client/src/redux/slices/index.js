import {combineReducers} from '@reduxjs/toolkit'
import configurationSlice from './configurationSlice'
import sitesSlice from './sitesSlice'
import userSlice from './userSlice'


const rootReducer = combineReducers({
    configuration: configurationSlice,
    sites: sitesSlice,
    user: userSlice
})



export default rootReducer