import { Box, Container, Typography, Paper, CircularProgress } from "@mui/material"
import SiteAlert from "../components/alerts&popups/alert"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import SiteTumbl from "../components/sites/sitesTumbl"
import {getSites} from '../redux/slices/sitesSlice'


export default function SitesCards() {
    const { sites, error, status } = useSelector(state => state.sites)
    const [isPending, startTransition] = React.useTransition()
    const [errorAlert, setErrorAlert] = React.useState('')
    const [sitesArray, setSitesArray] = React.useState([])
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (sites.length === 0 && status === 'idle') {
            startTransition(() => {
                dispatch(getSites())
            })
        } else if (status === 'failed') {
            setErrorAlert(error)
            
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
            {isPending ? (
                <CircularProgress />
            ) : (
                <>
                    {status === 'failed' && <SiteAlert children={errorAlert} />}
                    {sitesArray.length === 0 ? (
                        <Container>
                            <Box>
                                <Paper>
                                    <Typography variant='h2'>
                                        Aún no hay sitios por acá
                                    </Typography>
                                </Paper>
                            </Box>
                        </Container>
                    ) : (
                        <>
                            {sitesArray?.map((site) => {
                                return (
                                    <Box
                                        key={site.id}
                                        sx={{
                                            display: 'inline-flex',
                                            margin: 'auto'
                                        }}
                                    >
                                        <SiteTumbl site={site} />
                                    </Box>
                                )
                            })}
                        </>
                    )}
                </>
            )}
        </Box>
    )
}