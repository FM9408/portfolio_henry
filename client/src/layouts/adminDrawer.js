import * as React from 'react'
import { Box, styled, useTheme, List, CssBaseline, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import DrawerButtons from '../variables/drawerButtons'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { UserAvatar } from '../components/users&admin/avatar'
import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../redux/slices/configurationSlice'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'

export const drawerWidth = 240

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
})

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    width: `${drawerWidth}`,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    
}))

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open'
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen
//         })
//     })
// }))

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}))

export default function AdminDrawer() {
    const navigate = useNavigate()
    const user = React.useContext(userContext)
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)
    const dispatch = useDispatch()
    const buttons = DrawerButtons({ navigate: navigate, user: user })

    const handleDrawerOpen = () => {
        setOpen(true)
        dispatch(toggleDrawer(true))
        
    }

    const handleDrawerClose = () => {
        setOpen(false)
        dispatch(toggleDrawer(false))
    }

    return (
        <Box id='drawer' sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant='permanent' open={open}>
                <DrawerHeader>
                    <IconButton
                        onClick={open ? handleDrawerClose : handleDrawerOpen}
                    >
                        {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                   
                    <ListItem
                        key={'perfil'}
                        disablePadding
                        sx={{ display: 'block' }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                            onClick={() => navigate(`/${user.uid}/perfil`)}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                <UserAvatar user={user} theme={theme} />
                            </ListItemIcon>
                            <ListItemText
                                primary={'Perfil'}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {buttons.nav.map((button) => (
                        <ListItem
                            key={button.title}
                            disablePadding
                            sx={{ display: 'block' }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5
                                }}
                                onClick={button.action}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {button.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={button.title}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {buttons.social.map((button) => (
                        <ListItem
                            key={button.title}
                            disablePadding
                            sx={{ display: 'block' }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5
                                }}
                                onClick={button.action}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {button.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={button.title}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem
                        key={buttons.auth[0].title}
                        disablePadding
                        sx={{ display: 'block' }}
                    >
                        <ListItemButton
                            onClick={buttons.auth[0].action}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {buttons.auth[0].icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={buttons.auth[0].title}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}
