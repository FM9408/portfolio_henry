import React from 'react'
import { TextField, FormControlLabel, Checkbox, Button, Box, Grid, Link, Alert, Typography } from '@mui/material'
import ReactDOM from 'react-dom'

export default function LoginForm({ handleSubmit, data, onChange, errors, navigate, mode}) {
    const [createError, setError] = React.useState(null)
    
    
    
    return (
        <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{filter: mode === 'claro' ? null : 'invert(100%)' }}
        >
            {createError &&
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
                sx={{ backgroundColor: 'white' }}
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
                inputProps={{
                    sx: {
                        backgroundColor: 'white'
                    }
                }}
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
                control={
                    <Checkbox
                        value={data.remember}
                        name='remember'
                        color='primary'
                        onChange={(e) => onChange(e)}
                    />
                }
                label='Mantener sesión iniciada en este dispositivo'
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                color={mode === 'claro' ? 'secondary' : 'primary'}
                sx={{
                    mt: 3,
                    mb: 2,
                    filter: mode === 'claro' ? null : 'invert(100%)'
                }}
            >
                Enviar
            </Button>
            <Grid
                container
                sx={{ display: 'flex', justifyContent: 'space-around' }}
            >
                <Grid item>
                    <Link href='#' variant='body2'>
                        Olvidé mi contraseña
                    </Link>
                </Grid>
                <Grid item>
                    <Link
                        to='#'
                        variant='body2'
                        onClick={() => navigate('/registro')}
                    >
                        {'Crear una cuenta'}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}