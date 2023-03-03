import { alpha, colors } from "@mui/material";
const PRIMARY = {
        main: colors.blue[500],
        light: colors.blue[400],
        lighter: colors.blue[300],
        dark: colors.blue[600],
        darker: colors.blue[700],
        contrastText: colors.common.white
    }

const palette = {
    primary: PRIMARY,
    background: {
        default: alpha(colors.common.black, 0.01),
    },
    action: {
        active: colors.blueGrey[500],
        hover: alpha(colors.grey[500], 0.9)
    },
    ...colors
}

export default palette