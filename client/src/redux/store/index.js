import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../slices'

// this is the store
const store = configureStore({
    reducer: rootReducer
})


export default store