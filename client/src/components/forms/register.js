import React from "react"
import { TextField, useTheme, Grid, FormControlLabel, Button, Checkbox, Paper, InputAdornment, IconButton } from '@mui/material'
import {Visibility, VisibilityOff} from "@mui/icons-material"
import { Link } from "react-router-dom"



export default function RegisterForm({
    input,
    visibility,
    setVisibility,
    onChange,
    errors,
    theme
}) {
    
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete='given-name'
                        name='firstName'
                        fullWidth
                        id='firstName'
                        label='Nombre(s)'
                        autoFocus
                        value={input.firstName}
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id='lastName'
                        label='Apellido(s)'
                        name='lastName'
                        autoComplete='family-name'
                        value={input.lastName}
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='displayName'
                        label='Username'
                        name='displayName'
                        error={errors.displayName ? true : false}
                        helperText={errors.displayName ? errors.displayName : ''}
                        autoComplete="display-name"
                        value={input.displayName}
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='email'
                        label='Correo electronico'
                        name='email'
                        error={errors.email ? true : false}
                        helperText={errors.email ? errors.email : ""}
                        autoComplete='email'
                        value={input.email}
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        name='password'
                        label='Contraseña'
                        onChange={(e) => onChange(e)}
                        type={visibility ? 'text' : 'password'}
                        id='password'
                        autoComplete='new-password'
                        value={input.password}
                        error={errors.password ? true : false}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        variant='adornament'
                                        edge='end'
                                        onClick={() =>
                                            setVisibility(
                                                visibility ? false : true
                                            )
                                        }
                                        onPointerLeave={() =>
                                            setVisibility(false)
                                        }
                                    >
                                        {visibility ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        name='repeatPass'
                        label='Repite tu contraseña'
                        type='password'
                        id='repeatPass'
                        onChange={(e) => onChange(e)}
                        helperText={
                            Object.keys(errors).includes('repeatPass')
                                ? errors.repeatPass
                                : ''
                        }
                        autoComplete='off'
                        value={input.repeatPass}
                        error={Object.keys(errors).includes('repeatPass')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={input.TermsAndConditions}
                                checked={
                                    input.TermsAndConditions === true
                                        ? true
                                        : false
                                }
                                color={
                                    errors.TermsAndConditions
                                        ? 'error'
                                        : 'success'
                                }
                                id='TermsAndConditions'
                                name='TermsAndConditions'
                                onChange={(e) => onChange(e)}
                            />
                        }
                        label={
                            <>
                                He leido y acepto los{' '}
                                <Link to={'/terminos-y-condicones'}>
                                    Terminos y condiciones
                                </Link>{' '}
                                y la{' '}
                                <Link to={'/politica-de-privacidad'}>
                                    Politica de privacidad
                                </Link>
                            </>
                        }
                    />
                    {errors.TermsAndConditions && (
                        <p style={{color: `${theme.palette.error.main}`}}>{errors.TermsAndConditions}</p>
                    )}
                </Grid>
            </Grid>
            <Button
                disabled={
                    input.TermsAndConditions === true ? Object.keys(errors).length === 0 ? false : true : true
                }
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
            >
                Enviar
            </Button>
        </Paper>
    )
}