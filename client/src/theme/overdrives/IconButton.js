import { alpha } from "@mui/material";

export default function IconButton(theme) {
    return {
      MuiIconButton: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.grey[400],
            transition: "all 1s ease-in-out",
            "&:hover": {
              backgroundColor: theme.palette.action.hover
            },
            "%:active": {
                backgroundColor: theme.palette.action.active
            }
          },
          SizeLarge: {
            width: '2em',
            height: '2em'
          },
        },
      },
    };
}