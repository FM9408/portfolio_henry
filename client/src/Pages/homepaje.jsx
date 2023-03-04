import { Box, Paper, Typography } from "@mui/material";
import '../css/Homepage.css'
import React from "react";
import { modeContext } from "../App";
import Carrousel from "../layouts/carrousel";


export default function Homepage() {
    const mode = React.useContext(modeContext)
    return (
      <Box id="mainContainer" sx={{overflow: 'hidden'}}>
        <Paper mode={mode} sx={{zIndex: '-2'}} >
          <Carrousel />
        </Paper>
      </Box>
    );
}