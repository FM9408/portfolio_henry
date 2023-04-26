import React from 'react'
import { CssBaseline, useTheme, AppBar, Box, Grid, useMediaQuery } from '@mui/material'
import NavegationButton from '../components/Buttons/navegationButton'
import { modeContext } from '../App'
import { buttonsArray } from '../variables/navbarbuttons'
import ToggleModeButton from '../components/Buttons/togglemodebutton'
import LoginButton from '../components/Buttons/loginButton'
import json2mq from 'json2mq'
import NavbarMenu from '../components/Menus/navbarMenu'


export default function NavegationBat() {
    const theme = useTheme()
  const modo = React.useContext(modeContext)
    const mediaQueries = useMediaQuery(json2mq({
      maxWidth: 900
  }))
 
    return (
        <Box id='navbar'>
            <CssBaseline>
                <AppBar variant='navbar' modo={modo}>
                    <Grid container direction={'row'}>
                        {buttonsArray.map((bot, index) => {
                            return (
                                <NavegationButton
                                    key={bot.id}
                                    button={bot}
                                    theme={theme}
                                />
                            )
                        })}
                        <Box flexGrow={1} />
                        {
                            mediaQueries === false ? 
                                <>
                                    <ToggleModeButton />
                        <LoginButton />
                                </> : <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}><NavbarMenu components={[<ToggleModeButton/>, <LoginButton/>]} /></Box>
                        }
                    </Grid>
                </AppBar>
            </CssBaseline>
        </Box>
    )
}