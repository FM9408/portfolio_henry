export default function TextField(theme) {
    return {
        MuiTextField: {
            styleOverrides: {
                root: {
                    border: `1px solid ${theme.palette.secondary.main} `
                }
            }
        }
    }
}