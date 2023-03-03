import {combineReducers} from '@reduxjs/toolkit'
import configurationSlice from './configurationSlice'


const rootReducer = combineReducers({
    configuration: configurationSlice
})



export default rootReducer