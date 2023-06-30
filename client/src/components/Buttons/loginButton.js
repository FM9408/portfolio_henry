import { IconButton } from '@mui/material'
import {LoginRounded} from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useTheme} from '@mui/material'

export default function LoginButton() {
    const theme = useTheme()
    const [onMouse, toggleMouse] = React.useState(false)
    const navigate = useNavigate()
    return (
        <IconButton variant='loginButton' title='Acceder' onClick={() => navigate('/LogIn') } color='secondary' onPointerEnter={() => toggleMouse(true)} onPointerLeave={() => toggleMouse(false)}>
            <LoginRounded sx={{
                 }} />
        </IconButton>
    )
}