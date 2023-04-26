import React from 'react'
import { TextField, FormControlLabel, Checkbox, Button, Box, Grid, Link, Alert, Typography } from '@mui/material'
import { auth, createUser } from '../../redux/slices/firebaseSlices/authSlice'
import ReactDOM from 'react-dom'

export default function LoginForm({ handleSubmit, data, onChange, errors }) {
    const [createError, setError] = React.useState(null)
    
    
    async function onCreate() {
        try {
            const createdUser = await createUser()
            await auth.updateCurrentUser(createdUser)
            
        } catch (error) {
            setError(
                'Acceso denegado'
            )
             setTimeout(() => {
                 document.getElementById('Alert').style.display = 'flex'
             }, 0)
             setTimeout(() => {
                 document.getElementById('Alert').style.opacity = '100%'
             }, 500)
             setTimeout(() => {
                 document.getElementById('Alert').style.opacity = '0%'
             }, 6000)
             setTimeout(() => {
                 document.getElementById('Alert').style.display = 'none'
             }, 7000)
        }

    }
    return (
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {createError  &&
                ReactDOM.createPortal(
                    <Alert
                        variant='standard'
                        severity='error'
                        sx={{
                            textAlign: 'center',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography>{createError}</Typography>
                    </Alert>,
                    document.getElementById('Alert')
                )}
            <TextField
                margin='normal'
                helperText={errors.email ? errors.email : ''}
                error={errors.email ? true : false}
                color={
                    !errors.email && data.email.length > 1
                        ? 'success'
                        : 'secondary'
                }
                focused={data.email.length > 1 ? true : false}
                fullWidth
                id='email'
                label='Correo electronico'
                name='email'
                value={data.email}
                onChange={(e) => onChange(e)}
                autoComplete='email'
                autoFocus
            />
            <TextField
          margin='normal'
          variant='outlined'
                helperText={errors.password ? errors.password : ''}
                error={errors.password ? true : false}
                focused={data.password.length > 1 ? true : false}
                color={
                    !errors.password && data.password.length > 1
                        ? 'success'
                        : 'secondary'
                }
                fullWidth
                value={data.password}
                onChange={(e) => onChange(e)}
                name='password'
                label='Contraseña'
                type='password'
                id='password'
                autoComplete='current-password'
            />
            <FormControlLabel
                control={<Checkbox value={data.remember} name='remember' color='primary' onChange={(e) => onChange(e)} />}
                label='Mantener sesión iniciada en este dispositivo'
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
                sx={{ mt: 3, mb: 2 }}
            >
                Enviar
            </Button>
            <Grid container sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Grid item>
                    <Link href='#' variant='body2'>
                        Olvidé mi contraseña
                    </Link>
                </Grid>
                <Grid item>
                    <Button to='#' variant='body2' onClick={() => onCreate()}>
                        {"Crear una cuenta"}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}