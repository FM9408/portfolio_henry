// this is sparta
export default function Paper(theme) {
    return {
        MuiPaper: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.mode === 'claro' && {
                        backgroundColor: theme.palette.common.white,
                        color: theme.palette.common.black,
                        transition: `${theme.transitions.create(
                            ['all', 'transform'],
                            {
                                duration: theme.transitions.duration.standard,
                                easing: theme.transitions.easing.easeInOut
                            }
                        )}`
                    }),
                    ...(ownerState.mode === 'obscuro' && {
                        filter: 'invert(100%)',
                        transition: `${theme.transitions.create(
                            ['all', 'transform'],
                            {
                                duration: theme.transitions.duration.standard,
                                easing: theme.transitions.easing.easeInOut
                            }
                        )}`
                    })
                })
            }
        }
    }
}