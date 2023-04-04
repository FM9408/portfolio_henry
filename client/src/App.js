import React from 'react';
import './App.css';
import Router from './router';
import Theme from './theme/index'
import NavegationBat from './layouts/Navbar';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import {
    auth,
    commonUser
} from './redux/slices/firebaseSlices/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import Footer from './layouts/footer';
import { onAuthStateChanged } from 'firebase/auth';
import { logInUser } from './redux/slices/userSlice';
import AdminDrawer, { drawerWidth } from './layouts/adminDrawer';
import json2mq from 'json2mq';





export const modeContext = React.createContext()
export const userContext = React.createContext()

function App() {
    
    const { mode } = useSelector(state => state.configuration)
    const { loggedUser } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const mediaQueries = useMediaQuery(json2mq({
        maxHeight: 700
    }))
    const theme = useTheme()

  React.useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              dispatch(logInUser(user.toJSON()))
          } else {
             commonUser()
          } 
      })
  }, [mode, auth.currentUser])
  
  return (
      <userContext.Provider value={loggedUser}>
          <modeContext.Provider value={mode}>
              <Theme>
                  <Box
                      id='App'
                      sx={{
                          margin: 'auto',
                          position: 'relative',
                          height: 'fit-content',
                          mx:
                              loggedUser.isAnonymous === false
                                  ? `${drawerWidth / 100}%`
                                  : '.5%'
                      }}
                  >
                      <div
                          id='Alert'
                          style={{
                              position: 'absolute',
                              width: '100%',
                              zIndex: '20',
                              padding: '1%',
                              left: '0',
                              paddingTop: '0%',
                              opacity: '0%',
                              transition: `${theme.transitions.create(
                                  ['all', 'transform'],
                                  {
                                      duration:
                                          theme.transitions.duration.standard,
                                      easing: theme.transitions.easing.easeInOut
                                  }
                              )}`,
                              display: 'none'
                          }}
                      ></div>
                      <Box>
                          <userContext.Consumer>
                              {(user) => (
                                  <>
                                      {user.isAnonymous === true ||
                                      !user.uid ? (
                                          <NavegationBat />
                                      ) : (
                                          <AdminDrawer />
                                      )}
                                  </>
                              )}
                          </userContext.Consumer>
                      </Box>
                      <Box sx={{ width: '100%', height: 'fit-content' }}>
                          <Router user={loggedUser} />
                      </Box>
                      <Box
                          id='mainFooter'
                          sx={{
                              position:
                                  mediaQueries === false ? 'fixed' : 'static',
                              bottom: '0px',
                              left: '0px',
                              width: '100%',
                              px: '.5%',
                              margin: 'auto',
                              zIndex: 4,
                              transition: `${theme.transitions.create(
                                  ['all', 'transform'],
                                  {
                                      duration:
                                          theme.transitions.duration.standard,
                                      easing: theme.transitions.easing.easeInOut
                                  }
                              )}`
                          }}
                      >
                          <Footer />
                      </Box>
                  </Box>
              </Theme>
          </modeContext.Provider>
      </userContext.Provider>
  )
}

export default App;
