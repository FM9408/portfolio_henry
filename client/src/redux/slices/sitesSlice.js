import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from  'axios'

export const getSites = createAsyncThunk(
    'sites/getAllSites',
    async () => {
       
        const data = await axios.get('/sites/all')
        return data.data
       
    }
)


const sitesSlice = createSlice({
    name: 'Sites slice',
    initialState: {
        sites: [],
        status: 'idle',
        error: ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getSites.fulfilled, (state, action) => {
                state.sites = action.payload
                state.status = 'succeeded'
            })
            .addCase(getSites.pending, (state, action) => {
            state.status = 'loading'
            })
            .addCase(getSites.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export default sitesSlice.reducer