import { Alert, Box, Container, Typography, Paper } from "@mui/material"
import ReactDOM from 'react-dom'
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import SiteTumbl from "../components/sites/sitesTumbl"
import {getSites} from '../redux/slices/sitesSlice'


export default function SitesCards() {
    const { sites, error, status } = useSelector(state => state.sites)
    const [errorAlert, setErrorAlert] = React.useState('')
    const [sitesArray, setSitesArray] = React.useState([])
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (sites.length === 0 && status === 'idle') {
            dispatch(getSites())
        } else if (status === 'failed') {
            setErrorAlert(error)
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
        } else {
            setSitesArray(sites)
        }
    }, [status, dispatch, error, sites])
    
    return (
        <Box
            sx={{
                margin: 'auto',
                padding: '1%',
                display: 'flex',
                justifyContent: 'space-around'
            }}
        >
            {status === 'failed' &&
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
                        <Typography>{errorAlert}</Typography>
                    </Alert>,
                    document.getElementById('Alert')
                )}
            {sitesArray.length === 0 ? (
                <Container>
                    <Box>
                        <Paper>
                            <Typography variant="h2">Aún no hay sitios por acá</Typography>
                        </Paper>
                    </Box>
                </Container>
            ) : (
                <>
                    {sitesArray.map((site) => {
                        return (
                            <Box
                                key={site.id}
                                sx={{ display: 'inline-flex', margin: 'auto' }}
                            >
                                <SiteTumbl site={site} />
                            </Box>
                        )
                    })}
                </>
            )}
        </Box>
    )
}