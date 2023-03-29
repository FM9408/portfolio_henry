

export default function IconButton(theme) {
    return {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[400],
                    transition: `${theme.transitions.create(
                        ['all', 'transform'],
                        {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut
                        }
                    )}`,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    },
                    '%:active': {
                        backgroundColor: theme.palette.action.active
                    }
                },
                SizeLarge: {
                    width: '2em',
                    height: '2em'
                }
            }
        }
    }
}