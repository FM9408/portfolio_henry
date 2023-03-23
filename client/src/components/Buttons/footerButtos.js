import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom"


export default function FooterButtons({ buttons, types}) {
   

    return (
       
            
                <Grid container direction={types === 'redes' ? 'row' : 'column'}>
                    {
                        buttons.map(button => {
                            return (
                                <Grid item key={button.id}>
                                    <Link to={button.href} target={types === 'redes' ? '_blank': '_self'} style={{color:'inherit'}}>
                                        <Button
                                            color='inherit'
                                            startIcon={button.icon}
                                        >
                                            {button.button}
                                        </Button>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
          
    )
}

