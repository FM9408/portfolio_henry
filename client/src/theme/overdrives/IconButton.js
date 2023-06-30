import React from "react"
import { modeContext } from "../../App"
//iconButton
export default function IconButton(theme) {
    const mode = React.useContext(modeContext)
    return {
        MuiIconButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    backgroundColor: theme.palette.grey[400],
                    transition: `${theme.transitions.create(
                        ['all', 'transform'],
                        {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut,
                            delay: theme.transitions.duration.short
                        }
                    )}`,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    },
                    '%:active': {
                        backgroundColor: theme.palette.action.active
                    },
                    ...(ownerState.variant === 'loginButton' && {
                        filter: mode === 'claro' ? null : 'invert(100%)',
                        '&:hover': {
                            border: `2px solid ${theme.palette.common.black}`,
                            filter: 'invert(100%)'
                        }
                    }),
                    ...(ownerState.variant === 'adornament' && {
                        backgroundColor: 'transparent'
                    })
                }),
                
                SizeLarge: {
                    width: '2em',
                    height: '2em'
                }
            }
        }
    }
}