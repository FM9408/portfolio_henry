import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        loggedUser: {}
    },
    reducers: {
        logInUser: (state, action) => {
            state.loggedUser = action.payload
        },
        logOutUser: (state) => {
            state.loggedUser = {}
        }

    }
})

export const {logInUser} = userSlice.actions


export default userSlice.reducer