import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { useTheme, Typography, Paper} from '@mui/material'
import { modeContext, userContext } from '../App'
import SignIn from '../Pages/loginPage'
import Homepage from '../Pages/homepaje'
import AdminDashboard from '../Pages/adminDasboard'

export default function Router({ user }) {
    const mode = React.useContext(modeContext)
    
    const theme = useTheme()
    return (
        <Routes>
            <Route path='/'>
                <Route path='' element={<Homepage />} />
            </Route>
            <Route path='/LogIn' element={<SignIn />} />
            <Route
                path='/admin/:uid/dashboard'
                element={user.isAnonymous === false ? <AdminDashboard /> : null}
            />
            <Route
                path='*'
                element={
                    <Paper mode={mode}>
                        <Typography
                            variant='h1'
                            sx={{ color: theme.palette.primary.main }}
                        >
                            La pagina no fue encrontrada
                        </Typography>
                    </Paper>
                }
            />
        </Routes>
    )
}