import React from 'react'
import { CssBaseline, useTheme, AppBar, Box, Grid, IconButton } from '@mui/material'
import NavegationButton from '../components/Buttons/navegationButton'
import { modeContext, userContext } from '../App'
import {Logout} from '@mui/icons-material'
import { buttonsArray } from '../variables/navbarbuttons'
import ToggleModeButton from '../components/Buttons/togglemodebutton'
import { UserAvatar } from '../components/users&admin/avatar'
import LoginButton from '../components/Buttons/loginButton'
import { loginOut } from '../redux/slices/firebaseSlices/authSlice'


export default function NavegationBat() {
    const theme = useTheme()
  const modo = React.useContext(modeContext)
  const user = React.useContext(userContext)
 
    return (
        <Box id='navbar'>
            <CssBaseline>
                <AppBar modo={modo}>
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
                        <ToggleModeButton />

                        {user.isAnonymous === false ? (
                            <Box>
                                
                                <UserAvatar user={user} theme={theme} />
                            </Box>
                        ) : (
                            <LoginButton />
                        )}
                    </Grid>
                </AppBar>
            </CssBaseline>
        </Box>
    )
}