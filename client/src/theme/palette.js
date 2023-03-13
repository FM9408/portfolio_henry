import { alpha, colors } from "@mui/material";
const PRIMARY = {
        main: colors.blue[500],
        light: colors.blue[400],
        lighter: colors.blue[300],
        dark: colors.blue[600],
        darker: colors.blue[700],
        contrastText: colors.common.white
}


const SECONDARY = {
    main: colors.deepPurple[500],
    light: colors.deepPurple[400],
    lighter: colors.deepPurple[300],
    dark: colors.deepPurple[600],
    darker: colors.deepPurple[700],
    contrastText: colors.common.white
}

const palette = {
    primary: PRIMARY,
    secondary: SECONDARY,
    background: {
        default: alpha(colors.common.black, 0.01),
    },
    action: {
        active: colors.deepPurple[300],
        hover: alpha(colors.deepPurple[700], 0.5)
    },
    ...colors
}

export default palette