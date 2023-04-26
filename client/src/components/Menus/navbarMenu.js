import * as React from 'react'
import { Menu, MenuItem, IconButton, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'



export default function NavbarMenu({components}) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div >
            <IconButton
                id='basic-button'
                aria-controls={open ? 'navbar-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id='navbar-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {
                    components.map((component, index) => {
                        return (
                            <MenuItem key={index}>
                                {component}
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </div>
    )
}
