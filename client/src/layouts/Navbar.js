import React from 'react'
import { Container, CssBaseline, useTheme, AppBar, Box, Grid } from '@mui/material'
import { ThemeContext } from '@emotion/react'
import NavegationButton from '../components/Buttons/navegationButton'
import { modeContext } from '../App'
import { buttonsArray } from '../variables/navbarbuttons'
import ToggleModeButton from '../components/Buttons/togglemodebutton'



export default function NavegationBat() {
    const theme = useTheme()
    const modo = React.useContext(modeContext)
    return (
      <Box id="navbar">
        <CssBaseline>
          <AppBar modo={modo}>
            <Grid container direction={"row"}>
              {buttonsArray.map((bot, index) => {
                return (
                  <NavegationButton key={bot.id} button={bot} theme={theme} />
                );
              })}
              <Box flexGrow={1} />
              <ToggleModeButton />
            </Grid>
          </AppBar>
        </CssBaseline>
      </Box>
    );
}