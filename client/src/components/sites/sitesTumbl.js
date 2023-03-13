import * as React from 'react'
import { Button, CardActionArea, CardActions, Card, CardContent, Typography, CardMedia, Divider } from '@mui/material'
import { modeContext } from '../../App'
import { Link } from 'react-router-dom'

export default function SiteTumbl({ site }) {
    const mode = React.useContext(modeContext)
    return (
        <Card sx={{ width: 345, border: '1px solid black', padding: '1%' }}>
            <Link to={site.url} style={{textDecoration: 'none', color: 'inherit'}}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='140'
                        image={site.image.url}
                        alt='green iguana'
                        sx={{
                            borderRadius: '5px',
                            filter: mode === 'claro' ? null : 'invert(100%)',
                            transition: 'all 1s ease-in-out'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {site.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <Divider />
            <CardActions sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Button size='small' color='primary'>
                    Share
                </Button>
                <Button size='small' color='primary'>
                        Like
                </Button>
            </CardActions>
        </Card>
    )
}
