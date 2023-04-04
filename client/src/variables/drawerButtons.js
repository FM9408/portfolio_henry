import { Logout, Home , Message, Dashboard} from '@mui/icons-material'
import {loginOut} from '../redux/slices/firebaseSlices/authSlice'

export default function DrawerButtons({navigate, user}) {
    const buttons = {
        auth: [
            {
                title: 'Cerrar sesión',
                icon: <Logout />,
                action: () => loginOut()
            }
        ],
        nav: [
            {
                title: 'Home',
                icon: <Home />,
                action: () => navigate('/')
            },
            {
                title: 'Dashboard',
                icon: <Dashboard />,
                action: () => navigate(`/admin/${user.uid}/dashboard`)
            }
        ],
        social: [
            {
                title: 'Mensajes',
                icon: <Message />,
                action: () => navigate('/mensajes')
            }
        ]
    }
    return buttons
}