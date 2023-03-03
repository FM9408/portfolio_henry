import React from 'react';
import './App.css';
import Router from './router';
import Theme from './theme/index'
import NavegationBat from './layouts/Navbar';
import { Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';


export const modeContext = React.createContext()

function App() {
  const [padding, setPadding] = React.useState(0)
  const {mode} = useSelector(state => state.configuration)

  React.useEffect(() => {
    if(padding === 0 || padding !== document.getElementById('navbar')?.getBoundingClientRect().height) {
      setPadding(document.getElementById('navbar').getBoundingClientRect().height)
    }
  }, [padding, mode])
  
  return (
    <modeContext.Provider value={mode}>
      <Theme>
        <Box sx={{ margin: "auto", padding: "1%" }}>
          <Box>
            <NavegationBat />
          </Box>
          <Box>
            <Router />
          </Box>
        </Box>
      </Theme>
    </modeContext.Provider>
  );
}

export default App;
