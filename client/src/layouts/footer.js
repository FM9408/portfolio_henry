import React from 'react'
import { Box, useMediaQuery, useTheme, Grid } from '@mui/material'
import json2mq from 'json2mq'
import { footerNavegationButtons } from '../variables/footerButtons'
import FooterButtons from '../components/Buttons/footerButtos'




export default function Footer() {
    const theme = useTheme()
    const mediaQueries = useMediaQuery(json2mq({
        maxWidth: '900px'
    }))
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                padding: '1%',
                width: '100%'
            }}
        >
            {mediaQueries === false ? (
                <Box id='footer' sx={{ width: '100%' }}>
                    <Grid container direction='row' sx={{ width: '100%' }}>
                        <Grid item sx={{ width: `${100 / 3}%` }}>
                            <FooterButtons
                                buttons={footerNavegationButtons.legal}
                                types={'legal'}
                            />
                        </Grid>
                        <Grid item sx={{ width: `${100 / 3}%` }}>
                            <FooterButtons
                                buttons={footerNavegationButtons.redes}
                                types={'redes'}
                            />
                        </Grid>
                        <Box></Box>
                    </Grid>
                </Box>
            ) : (
                <Box id='footer'>
                    <Grid container direction='column'>
                        <Grid item>hola</Grid>
                        <Grid item>hola</Grid>
                        <Grid item>hola</Grid>
                    </Grid>
                </Box>
            )}
        </Box>
    )
}