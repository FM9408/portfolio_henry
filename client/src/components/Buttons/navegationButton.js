import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Grid, useTheme, alpha} from '@mui/material'
import {styled} from '@mui/material/styles';
import { fontSize } from '@mui/system';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../redux/slices/configurationSlice';
import { modeContext } from '../../App';
import { buttonsArray } from '../../variables/navbarbuttons';



const NavbarButton = styled(Button)(({ theme, color }) => ({
  fontSize: '1.1rem',
  
  py: '1%',
  width: '100%',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.dark, .3)
  }
 
}));
export default function NavegationButton({button, theme}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [linkcolor, setLinkColor] = React.useState(theme.palette.primary.contrastText)
   
    

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
          theme={theme}
          onPointerLeave={() =>
            setLinkColor(theme.palette.primary.contrastText)
          }
          onPointerEnter={() => setLinkColor(theme.palette.secondary.ligth)}
          sx={{ color: linkcolor }}
          onClick={
            button.id === "cambiar"
              ? () => dispatch(changeMode())
              : () => navigate(`${button.href}`)
          }
        >
          {button.link}
        </NavbarButton>
      </Grid>
    );
}