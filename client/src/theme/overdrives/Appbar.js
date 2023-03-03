import { colors } from "@mui/material";


export default function AppBar(theme) {
    return {
      MuiAppBar: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            position: "static",
            width: "100%",
            display: "inline-flex",
            height: "fit-content",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            transition: 'all 1s ease-in-out',
            ...(ownerState.modo === "claro" && {
              backgroundColor: theme.palette.secondary.dark,
            }),

            ...(ownerState.modo === "obscuro" && {
              filter: "invert(100%)",
             
            }),
          }),
        },
      },
    };
}