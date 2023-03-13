import React from 'react';
import './App.css';
import Router from './router';
import Theme from './theme/index'
import NavegationBat from './layouts/Navbar';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Footer from './layouts/footer';

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:3001'


export const modeContext = React.createContext()

function App() {
    
  const {mode} = useSelector(state => state.configuration)

  React.useEffect(() => {
    
  }, [mode])
  
  return (
      <modeContext.Provider value={mode}>
          <Theme>
              <Box sx={{ margin: 'auto', padding: '1%', position: 'relative'}}>
                  <div
                      id='Alert'
                      style={{ position: 'absolute', width: '100%', zIndex: '20', padding:'1%', left: '0', paddingTop:'0%', opacity: '0%',
                            transition: 'opacity 1s ease-in-out', display:'none'}}
                  ></div>
                  <Box>
                      <NavegationBat />
                  </Box>
                  <Box>
                      <Router />
                  </Box>
                  <Box sx={{position: 'fixed', bottom: '0px', left: '0px', width: '100%'}}>
                    <Footer />
                  </Box>
              </Box>
          </Theme>
      </modeContext.Provider>
  )
}

export default App;
