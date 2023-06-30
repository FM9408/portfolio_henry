import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import {Cancel, Check, Diamond} from '@mui/icons-material'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginForm from '../components/forms/login';
import * as yup from 'yup'
import { useTheme } from '@mui/material'
import { getAuthed, auth } from '../redux/slices/firebaseSlices/authSlice';
import { useNavigate } from 'react-router-dom'
import { userContext, modeContext } from '../App';



const schema = yup.object({
  email: yup.string().email('Debes introducir un email valido').required('El correo electronico es requerido'),
  password: yup.string().required('La contraseña es requerida')
}).required()


export default function SignIn() {
  const user = React.useContext(userContext)
  const mode = React.useContext(modeContext)
  const navigate = useNavigate()
  const theme = useTheme()
  const [errors, setErrors] = React.useState({})
  const [data, setData] = React.useState({
    email: '',
    password: '',
    remember: false
  })
 
 

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const user = await getAuthed(data)
      
      await auth.updateCurrentUser(user)
     
    } catch (error) {
      if (error.message === 'auth/user-not-found') {
        setErrors({
          ...errors,
          email: 'El email no está registrado'
        })
      }
      if (error.message === 'auth/wrong-password') {
        setErrors({
          ...errors,
          password: 'Contraseña incorrecta por favor intanta de nuevo'
        })
      }
    }
   
  };


  const onChange = async (e) => {
    setErrors({})
    try {
      if (e.target.name === 'remember') {
        setData({
          ...data,
          remember:!data.remember
       })
      } else {
        setData({
      ...data,
      [e.target.name]: e.target.value
     })
     }
     await schema.validate({ ...data, [e.target.name]: e.target.value })
     setErrors({})
   } catch (error) {
     setErrors({
       
       [error.params.path]: error.errors[0]
     })
   }
    
  
  }

  React.useEffect(() => {
    if (user.uid && user.isAnonymous === false ) {
       navigate(`/admin/${user.uid}/dashboard`)
    }
  }, [user, navigate])


  return (
    
    
      
      <CssBaseline>
        
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ filter: mode === 'claro' ? null : 'invert(100%)', m: 1, bgcolor: Object.keys(errors).length !== 0  ? theme.palette.error.main : data.email.length >= 1 && data.password.length >= 1 ? theme.palette.success.main : theme.palette.secondary.dark, display: 'flex', alignContent: 'center', transition: `${theme.transitions.create(['all', 'transform'], {
          duration: theme.transitions.duration.complex
        })}` }}>
          {
            Object.keys(errors).length >= 1 ? (
              <Cancel sx={{fill: theme.palette.common.white}} />
            ) : data.email.length >= 1 && data.password.length >= 1 ? (
                <Check sx={{fill: theme.palette.common.white}} />
            ) : <Diamond sx={{fill: theme.palette.common.white}}/>
            }
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
            <LoginForm handleSubmit={handleSubmit} onChange={onChange} data={data} errors={errors} navigate={navigate} mode={mode} />
        </Box>
      </CssBaseline>
      
  );
}
