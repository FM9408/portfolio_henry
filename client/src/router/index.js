import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { useTheme, Typography} from '@mui/material'
import SignIn from '../Pages/loginPage'
import Homepage from '../Pages/homepaje'
import AdminDashboard from '../Pages/adminDasboard'
import UnauthtorizedAccessPage from '../Pages/unauthorizadedAccessPage'
import RegisterPage from '../Pages/registerPage'
import Page404 from '../Pages/404'

export default function Router({ user }) {
    
    const theme = useTheme()
    return (
        <Routes>
            <Route path='/'>
                <Route path='' element={<Homepage />} />
            </Route>
            <Route path='/LogIn' element={<SignIn />} />
            <Route path='/registro' element={<RegisterPage/> }/>
            <Route
                path='/admin/:uid/dashboard'
                element={user.isAnonymous === false ? <AdminDashboard /> : <UnauthtorizedAccessPage />}
            />
            <Route
                path='*'
                element={
                        <Page404 />
                    
                }
            />
        </Routes>
    )
}