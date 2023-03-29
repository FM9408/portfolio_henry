import { IconButton } from "@mui/material";
import {ArrowRight, ArrowLeft} from "@mui/icons-material"
import { useTheme } from "@mui/material";
import React from "react";

export const CarouselNexButton = ({nextImage}) => {
    const theme = useTheme()
    return (
      <IconButton
        title='Imagen siguiente'
        sx={{ position: "absolute", top: '40%', right: '0', zIndex: '2', display: 'flex'}}
        size="large"
        theme={theme}
        onClick={nextImage}
        children={
          <ArrowRight
            sx={{
              width: "2rem",
              height: "2rem",
              color: theme.palette.common.black,
            }}
          />
        }
      ></IconButton>
    );
}


export const CarrouselPrevButton = ({prevImage}) => {
    const theme= useTheme()
    return (
      <IconButton
        title='Imagen anterior'
        sx={{ position: "absolute", top: "40%", left: "0", zIndex: '2', display: 'flex' }}
        size="large"
        theme={theme}
        onClick={prevImage}
        children={
          <ArrowLeft
            sx={{
              width: "2rem",
              height: "2rem",
              color: theme.palette.common.black,
            }}
          />
        }
      ></IconButton>
    );
}