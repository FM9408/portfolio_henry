import React from 'react'
import {createTheme, CssBaseline, StyledEngineProvider, ThemeProvider} from '@mui/material'
import overdrives from './overdrives'
import typography from './typography'
import palette from './palette'
import costumeShadows from './costumeShadow'
import shadows from './shadows'
import { transitions } from './transitions'

const Theme = ({children}) => {
    const themeOption = React.useMemo(
      () => ({
        palette,
        typography,
        customShadows: costumeShadows(),
        shadows: shadows(),
            shape: { borderRadius: 6 },
        transitions: transitions
      }),
      []
    );

    const theme = createTheme(themeOption);
    theme.components = {
            ...overdrives(theme)
        }
   
    return ( 
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}


export default Theme




