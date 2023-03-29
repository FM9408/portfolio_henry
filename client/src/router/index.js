import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { useTheme, Typography, Paper} from '@mui/material'
import { modeContext } from '../App'
import SignIn from '../Pages/loginPage'
import Homepage from '../Pages/homepaje'

export default function Router() {
    const mode = React.useContext(modeContext)
    const theme = useTheme()
    return (
        <Routes>
            <Route path='/'>
                <Route path='' element={<Homepage />} />
            </Route>
            <Route path='/LogIn' element={<SignIn />} />
            <Route path='*' element={<Paper mode={mode}><Typography variant='h1' sx={{color: theme.palette.primary.main}}>La pagina no fue encrontrada</Typography></Paper>} />
        </Routes>
    )
}