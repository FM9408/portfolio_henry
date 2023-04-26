import {createSlice} from '@reduxjs/toolkit'


const configurationSlice = createSlice({
    name: 'Configuration Slice',
    initialState: {
        mode: 'claro',
        opendDrawer: false
    },
    reducers: {
        changeMode: (state) => {
            state.mode === 'claro' ? state.mode = 'obscuro' : state.mode = 'claro'
        },
        toggleDrawer: (state, action) => {
            state.opendDrawer = action.payload
        }
    },
    extraReducers: {

    }

})


export const {changeMode, toggleDrawer} = configurationSlice.actions


export default configurationSlice.reducer