import React from "react"
import ReactDOM from 'react-dom'
import { Alert, Box, Typography } from "@mui/material"



export default function SiteAlert({ children }) {
    function loaded() {
        setTimeout(() => {
            document.getElementById('Alert').style.display = 'flex'
        }, 0)
        setTimeout(() => {
            document.getElementById('Alert').style.opacity = '100%'
        }, 500)
        setTimeout(() => {
            document.getElementById('Alert').style.opacity = '0%'
        }, 6000)
        setTimeout(() => {
            document.getElementById('Alert').style.display = 'none'
        }, 7000) 
    }
    


    React.useEffect(() => {
        loaded()
    }, [children])

    
    return (
        <Box>
            {ReactDOM.createPortal(
                <Alert
                    variant='standard'
                    severity='error'
                    sx={{
                        textAlign: 'center',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography>{children}</Typography>
                </Alert>,
                document.getElementById('Alert')
            )}
        </Box>
    )
}