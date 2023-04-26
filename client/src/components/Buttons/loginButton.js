import { IconButton } from '@mui/material'
import {LoginRounded} from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginButton() {
    const [onMouse, toggleMouse] = React.useState(false)
    const navigate = useNavigate()
    return (
        <IconButton title='Acceso de administrador' onClick={() => navigate('/LogIn') } color='secondary' onPointerEnter={() => toggleMouse(true)} onPointerLeave={() => toggleMouse(false)}>
            <LoginRounded sx={{ filter: onMouse === true ? 'invert(100%)' : null, transition: 'all 1s ease-in-out' }} />
        </IconButton>
    )
}