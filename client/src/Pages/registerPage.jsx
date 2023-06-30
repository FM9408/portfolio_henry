import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import {Link, useNavigate} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme, ThemeProvider } from '@mui/material'
import RegisterForm from '../components/forms/register';
import * as yup from 'yup'
import { auth, newUser } from '../redux/slices/firebaseSlices/authSlice';
import axios from 'axios'


const schema = yup.object({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  email: yup.string().email('Debes introducir un email válido').required('Escribe tu correo electronico'),
  password: yup.string().min(7, "La contraseña es muy corta").required("Escribe una contraseña"),
  repeatPass: yup.string().test('Las contraseñas coinciden', 'Las contraseñas no coinciden', function (value) {
    return this.parent.password === value
  }),
  TermsAndConditions: yup.boolean().isFalse('Debes aceptar los términos y condiciones'),
  displayName: yup.string().min(3, "El nombre de usuario es demasiado corto").max(12, "El nombre de usuario es demasiado largo").test("El nombre de usuario está disponible", "El nombre de usuario no está disponible", async (value) => {
    const users = await axios.get(`/user/checkUser?displayName=${value}`)
    return users.data.length === 0
  }).required('Escribe un nombre de usuario')
})
export default function SignUp() {
  const theme = useTheme()
  const navigate = useNavigate()
    const [input, setInput] = React.useState({
        firstName: '',
        lastName: '',
      password: '',
        displayName: '',
        repeatPass: '',
        email: '',
        TermsAndConditions: false
        
    })
  const [errors, setErrors] = React.useState({
    foo: 'foo'
  })
  const [visibility, setVisibility] = React.useState(false)
  
 
  const onChange = async(e) => {
    setErrors({})
    try {
      setInput({
      ...input,
      [e.target.name]:e.target.value
    })
    if (e.target.name === 'TermsAndConditions') {
      setInput({
        ...input,
        TermsAndConditions: !input.TermsAndConditions,
      })
      
      }
      
    await schema.validate({ ...input, [e.target.name]: e.target.value}, { abortEarly: false })

      
    } catch (error) {
      let errorsM={}
      error.inner.forEach(err => {
        return Object.assign(errorsM, {
          ...errorsM,
          [err.path]:err.message
        })
      })
      setErrors(errorsM )
    }
  }
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    
    try {
      let user = await newUser(input)
      await axios.post('/user/create', {
        uid: user.uid,
        ...input
      })
      await auth.updateCurrentUser(user)
      window.location.href= '/'
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrors({
          email: 'El email ya está en uso'
        })
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <RegisterForm theme={theme } errors={errors} input={input} handleSubmit={handleSubmit} onChange={onChange} visibility={visibility} setVisibility={setVisibility}  />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/LogIn'} variant="body2">
                  Ya tengo una cuenta
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}