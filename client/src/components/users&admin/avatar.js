import { Avatar, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import React from 'react'

function stringToColor(string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff
        color += `00${value.toString(16)}`.slice(-2)
    }
    /* eslint-enable no-bitwise */

    return color
}

function stringAvatar(name, opendDrawer, theme) {
   
    return {
        sx: {
            bgcolor: stringToColor(name),
            color: theme.palette.primary.contrastText,
            width: opendDrawer === true ? 60 : null,
            height: opendDrawer === true ? 60 : null,
            transition: theme.transitions.create('all', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }
}

export function UserAvatar({ user}) {
    const { opendDrawer } = useSelector((state) => state.configuration)
    const theme = useTheme()
    
    return (
        <>
            {user.photoURL ? (
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
            ) : (
                <Avatar
                    {...stringAvatar(`${user?.displayName?.toUpperCase()} ${user?.email?.toUpperCase()}`, opendDrawer, theme)}
                    
                />
            )}
        </>
    )
}