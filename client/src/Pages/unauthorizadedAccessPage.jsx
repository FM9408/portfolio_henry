import React from "react"
import { Container, Box, Paper, Typography, styled, useTheme } from '@mui/material'



const StyledTypography = styled('h1')(({ theme, opacity, shadow }) => ({
    color: '#fff',
    fontSize: '5rem',
    fontFamily: 'Pacifico',
    opacity: opacity,
    transform: 'rotate(-5deg) translateY(-50px)',
    transition: theme.transitions.create(['opacity', 'text-shadow'], {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut
    }),
    textShadow: `0 0 ${shadow.a} #fff, 0 0 ${shadow.b} #fff, 0 0 ${shadow.c} #fff, 0 0 ${shadow.d} red, 0 0 ${shadow.e} red, 0 0 ${shadow.f} red, 0 0 1${shadow.g} red, 0 0 ${shadow.h} red`
}))

export default function UnauthtorizedAccessPage() {
    const theme = useTheme()
    const [opacity, setOpacity] = React.useState('0%')
    const [shadow, setShadow] = React.useState({
        a: '7px',
        b: '10px',
        c: '21px',
        d: '42px',
        e: '82px',
        f: '92px',
        g: '102px',
        h: '151px'
    })

    function blinking() {
        setTimeout(() => {
            setOpacity('0%')
            setShadow({
                a: '0px',
        b: '0px',
        c: '0px',
        d: '0px',
        e: '0px',
        f: '0px',
        g: '0px',
        h: '0px'
            })
        }, 200)
        setTimeout(() => {
            setOpacity('100%')
            setShadow({
                a: '7px',
        b: '10px',
        c: '21px',
        d: '42px',
        e: '82px',
        f: '92px',
        g: '102px',
        h: '151px'
            })
        }, 400)
        setTimeout(() => {
            setOpacity('0%')
            setShadow({
                a: '0px',
        b: '0px',
        c: '0px',
        d: '0px',
        e: '0px',
        f: '0px',
        g: '0px',
        h: '0px'
            })
        }, 500)
        setTimeout(() => {
            setOpacity('100%')
            setShadow({
                a: '7px',
        b: '10px',
        c: '21px',
        d: '42px',
        e: '82px',
        f: '92px',
        g: '102px',
        h: '151px'
            })
        }, 600)
        setTimeout(() => {
            setOpacity('0%')
            setShadow({
                a: '0px',
        b: '0px',
        c: '0px',
        d: '0px',
        e: '0px',
        f: '0px',
        g: '0px',
        h: '0px'
            })
        }, 800)
        setTimeout(() => {
            setOpacity('100%')
            setShadow({
                a: '7px',
        b: '10px',
        c: '21px',
        d: '42px',
        e: '82px',
        f: '92px',
        g: '102px',
        h: '151px'
            })
        },1000)
    }


    React.useEffect(() => {
        setOpacity('100%')
        setInterval(() => {
            blinking()
        }, 4000)
    },[])

    return (
        
            <Box sx={{backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh'}}>
                <Paper sx={{backgroundColor: 'black', textAlign:'center'}}>
                <StyledTypography opacity={opacity} shadow={shadow }  theme={theme}>No deberías estar aquí</StyledTypography>
                </Paper>
            </Box>
      
    )
}