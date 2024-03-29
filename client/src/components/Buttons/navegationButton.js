import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Grid} from '@mui/material'
import {styled} from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../redux/slices/configurationSlice';
import { buttonsArray } from '../../variables/navbarbuttons';



const NavbarButton = styled(Button)(() => ({
  fontSize: '1.1rem',
  
  py: '1%',
  width: '100%',
 
}));
export default function NavegationButton({button, theme}) {
    const navigate = useNavigate()
   
    

    return (
      <Grid
        
        item
        sx={{
          width: `${80/buttonsArray.length}%`,
          height: "fit-content",
          display: "inline-flex",
          margin: "auto",
        }}
      >
        <NavbarButton
          title={button.link}
          theme={theme}
          variant='contained'
          color='inherit'
          onClick={
            () => navigate(`${button.href}`)
          }
        >
          {button.link}
        </NavbarButton>
      </Grid>
    );
}