import { Avatar, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import React from 'react'

export function UserAvatar({ user}) {
    const { opendDrawer } = useSelector((state) => state.configuration)
    const theme = useTheme()
    
    return (
        <Avatar
            src={user.photoURL}
            sx={{
                width: opendDrawer === true ? 60 : null,
                height: opendDrawer === true ? 60 : null,
                transition: theme.transitions.create('all', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                })
            }}
        />
    )
}