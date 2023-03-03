import { Box, Paper, Typography } from "@mui/material";
import '../css/Homepage.css'
import React from "react";
import { modeContext } from "../App";


export default function Homepage() {
    const mode = React.useContext(modeContext)
    return (
        <Box id='mainContainer'>
            <Paper mode={mode}>
                <Typography variant="h1">Aquí iria un pequeño carrusel</Typography>
            </Paper>
        </Box>
    )
}