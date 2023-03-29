import React from 'react'
import { Box, useMediaQuery, useTheme, Grid, Typography, CssBaseline, AppBar } from '@mui/material'
import json2mq from 'json2mq'
import { footerNavegationButtons } from '../variables/footerButtons'
import FooterButtons from '../components/Buttons/footerButtos'
import { modeContext } from '../App'




export default function Footer() {
    const theme = useTheme()
    const mode = React.useContext(modeContext)
    const mediaQueries = useMediaQuery(json2mq({
        maxWidth: '900px'
    }))
    return (
        <CssBaseline>
            <AppBar
                variant='footer'
                mode={mode}
                color={mode === 'claro' ? 'secondary' : 'primary'}
            >
                {mediaQueries === false ? (
                    <Box id='footer' sx={{ width: '100%', py: '.5%' }}>
                        <Grid container direction='row' sx={{ width: '100%' }}>
                            <Grid item sx={{ width: `${100 / 3}%` }}>
                                <FooterButtons
                                    buttons={footerNavegationButtons.legal}
                                    types={'legal'}
                                />
                            </Grid>
                            <Grid item sx={{ width: `${100 / 3}%` }}>
                                <Typography variant='body2'>
                                    Derechos reservados © 2023
                                </Typography>
                            </Grid>
                            <Grid item sx={{ width: `${100 / 3}%` }}>
                                <FooterButtons
                                    buttons={footerNavegationButtons.redes}
                                    types={'redes'}
                                />
                            </Grid>
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
            </AppBar>
        </CssBaseline>
    )
}