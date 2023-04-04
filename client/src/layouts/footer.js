import React from 'react'
import { Box, useMediaQuery, useTheme, Grid, Typography, CssBaseline, AppBar } from '@mui/material'
import json2mq from 'json2mq'
import { footerNavegationButtons } from '../variables/footerButtons'
import FooterButtons from '../components/Buttons/footerButtos'
import { modeContext, userContext } from '../App'
import { drawerWidth, opened } from './adminDrawer'
import { useSelector } from 'react-redux'




export default function Footer() {
   
    const mediaQueries = useMediaQuery(json2mq({
        maxWidth: 900
    }))
    const mode = React.useContext(modeContext)
    const { opendDrawer } = useSelector((state) => state.configuration)

    React.useEffect(() => {
        console.log(opendDrawer)
    }, [opendDrawer])
    return (
        <CssBaseline>
            <AppBar
                variant='footer'
                mode={mode}
                color={mode === 'claro' ? 'secondary' : 'primary'}
            >
                {mediaQueries === false ? (
                    <Box
                        id='footer'
                        sx={{
                            width: `calc(100% - ${drawerWidth}px)`
                        }}
                    >
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
                    <Box
                        id='footer'
                        sx={{
                            width: `calc(100% - ${drawerWidth}px)`
                        }}
                    >
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