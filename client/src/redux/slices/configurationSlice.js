import {createSlice} from '@reduxjs/toolkit'


const configurationSlice = createSlice({
    name: 'Configuration Slice',
    initialState: {
        mode: 'claro'
    },
    reducers: {
        changeMode: (state) => {
            state.mode === 'claro' ? state.mode = 'obscuro' : state.mode = 'claro'
        }
    },
    extraReducers: {

    }

})


export const {changeMode} = configurationSlice.actions


export default configurationSlice.reducer