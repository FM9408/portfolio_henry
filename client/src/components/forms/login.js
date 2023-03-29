import React from 'react'
import { TextField, FormControlLabel, Checkbox, Button, Box, Grid, Link } from '@mui/material'


export default function LoginForm({ handleSubmit, data, onChange, errors}) {
    return (
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href='#' variant='body2'>
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to='#' variant='body2'>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}