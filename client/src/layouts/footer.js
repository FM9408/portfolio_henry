import React from 'react'
import { Box, useMediaQuery, useTheme, Grid } from '@mui/material'
import json2mq from 'json2mq'


export default function Footer() {
    const theme = useTheme()
    const mediaQueries = useMediaQuery(json2mq({
        maxWidth: '900px'
    }))
    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, padding: '1%' }}>
            {
                mediaQueries === false ? (
                    <Box id='footer'>
                        <Box>

                        </Box>
                        <Box>
                        </Box>
                        <Box>
                        </Box>
                    </Box>) : (
                        <Box id='footer'>
                            <Grid container direction='column'>
                                <Grid item>
                                    hola
                                </Grid>
                                <Grid item>
                                    hola
                            </Grid>
                            <Grid item>
                                    hola
                                </Grid>
                            </Grid>
                        </Box>
                    )
           }
        </Box> 
    )
}