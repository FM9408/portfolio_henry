
export default function AppBar(theme) {
    return {
        MuiAppBar: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    position: 'static',
                    width: '100%',
                    display: 'inline-flex',
                    height: 'fit-content',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    zIndex: 4,
                    transition: `${theme.transitions.create(
                        ['all', 'transform'],
                        {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut
                        }
                    )}`,
                    ...(ownerState.modo === 'claro' &&  {
                        backgroundColor: theme.palette.secondary.main
                    }),

                    ...(ownerState.modo === 'obscuro' && {
                        filter: 'invert(100%)'
                    })
                }),
                footer: ({ ownerState }) => ({
                    color: theme.palette.secondary.contrastText,
                    transition: `${theme.transitions.create(
                        ['all', 'transform'],
                        {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut
                        }
                    )}`,
                    ...(ownerState.modo === 'claro' && {
                        backgroundColor: theme.palette.secondary.main
                    }),
                    ...(ownerState.modo === 'obscuro' && {
                        filter: 'invert(100%)'
                    })
                }),
                
            }
        }
    }
}