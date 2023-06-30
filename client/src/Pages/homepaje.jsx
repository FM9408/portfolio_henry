import { Box, Divider} from "@mui/material";
import '../css/Homepage.css'
import React from "react";
import { modeContext } from "../App";
import Carrousel from "../layouts/carrousel";
import SitesCards from "../layouts/SitesCards";


export default function Homepage() {
    const mode = React.useContext(modeContext)
  return (
   
      <Box>
      <Box id="mainContainer" sx={{overflow: 'hidden'}}>
          <Carrousel />
      </Box>
      <Divider variant="middle" sx={{color: 'black'}} />
      <Box>
          <SitesCards />
      </Box>
      </Box>
     
    )
}