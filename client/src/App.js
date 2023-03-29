import React from 'react';
import './App.css';
import Router from './router';
import Theme from './theme/index'
import NavegationBat from './layouts/Navbar';
import { Box, IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material'
import { loginOut } from './redux/slices/firebaseSlices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './layouts/footer';
import { auth, commonUser } from './redux/slices/firebaseSlices/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { logInUser } from './redux/slices/userSlice';




export const modeContext = React.createContext()
export const userContext = React.createContext()

function App() {
    
    const { mode } = useSelector(state => state.configuration)
    const { loggedUser } = useSelector(state => state.user)
    const dispatch = useDispatch()

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
                      sx={{
                          margin: 'auto',
                          padding: '1%',
                          position: 'relative'
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
                              transition: 'opacity 1s ease-in-out',
                              display: 'none'
                          }}
                      ></div>
                      <Box>
                          <userContext.Consumer>
                              {({ isAnonymous }) => (
                                  <>
                                      {isAnonymous === true ? (
                                          <NavegationBat />
                                      ) : (
                                          <IconButton onClick={() => loginOut()}>
                                              <Logout />
                                          </IconButton>
                                      )
                                      }
                                  </>
                              )}
                          </userContext.Consumer>
                      </Box>
                      <Box>
                          <Router />
                      </Box>
                      <Box
                          sx={{
                              position: 'fixed',
                              bottom: '0px',
                              left: '0px',
                              width: '100%'
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
