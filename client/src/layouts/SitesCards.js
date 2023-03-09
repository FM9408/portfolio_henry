import { Alert, Box, Typography } from "@mui/material"
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
        console.log(status)
       
        if (sites.length === 0 && status === 'idle') {
            dispatch(getSites())
        } else if (status === 'failed') {
            setErrorAlert(error)
            setTimeout(() => {
                document.getElementById('Alert').style.opacity = '100%'
            })
            setTimeout(() => {
                document.getElementById('Alert').style.opacity = '0%'
            }, 6000)
        } else {
            setSitesArray(sites)
        }
    }, [status])
    
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
                            alignItems: 'center',
                            
                            
                        }}
                    >
                        <Typography>{errorAlert}</Typography>
                    </Alert>,
                    document.getElementById('Alert')
                )}
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
        </Box>
    )
}