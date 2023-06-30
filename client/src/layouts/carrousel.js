import React from "react";
import { CarrouselPrevButton, CarouselNexButton } from "../components/Buttons/carrouselButtons";
import { Box, Container, useTheme, CircularProgress } from "@mui/material";
import {modeContext} from '../App'

export default function Carrousel() {
    const theme = useTheme()
    const suspense = React.Suspense
    const maxIndex = 4
    const mode = React.useContext(modeContext)
    let [index, setIndex] = React.useState(0)
    const [isPending, startTransition] = React.useTransition()
    let[images, getImages] = React.useState([])

    
    
   
   

    function nextImage() {
        startTransition(() => {
          if (index === maxIndex - 1) {
              setIndex(0)
          } else {
              setIndex(index + 1)
          }
      })
    }
    
   

    

     function prevImage() {
         startTransition(() => {
           if (index === 0) {
               setIndex(maxIndex - 1)
           } else {
               setIndex(index - 1)
           }
       })
     }

        
    

      React.useEffect(() => {
        function loop() {
            setTimeout(() => {
                nextImage()
            }, 17000)
        }
          if (images.length === 0) {
              startTransition(() => {
                 let internal = 1
                 let imagePreCharge = []
                 while (internal <= maxIndex) {
                     imagePreCharge.push(`/assets/carrousel/0${internal}.jpg`)
                     internal++
                 }
                 getImages(imagePreCharge)
         
            })
          }
        return (
          loop()
        )
      },[]);


    return (
        <Container
            sx={{
                margin: 'auto',
                width: '100%',
                my: '1%',
                filter: mode !== 'claro' ? 'invert(100%)' : null,
                transition: `${theme.transitions.create(['all', 'transform'], {
                    duration: theme.transitions.duration.standard
                })}`
            }}
        >
            {isPending === true && images.length === 0 ? (
                <CircularProgress />
            ) : (
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '400px',
                        margin: 'auto',
                        py: '1%'
                    }}
                >
                    <Box
                        id='prevImage'
                        sx={{
                            display: 'flex',
                            position: 'absolute',
                            height: '70%',
                            left: '-20%',
                            top: '10%',
                            borderRadius: '20px',
                            boxShadow: theme.shadows[12],
                            overflow: 'hidden',
                            filter: 'blur(8px)',
                            transition: `${theme.transitions.create(
                                ['all', 'transform'],
                                {
                                    duration:
                                        theme.transitions.duration.standard,
                                    easing: theme.transitions.easing.easeInOut
                                }
                            )}`
                        }}
                    >
                        <img
                            src={
                                index === 0
                                    ? images[maxIndex - 1]
                                    : images[index - 1]
                            }
                            alt='Imagen anterior'
                        />
                    </Box>
                    <Box
                        id='currentImage'
                        sx={{
                            display: 'flex',
                            transition: `${theme.transitions.create(
                                ['all', 'transform'],
                                {
                                    duration:
                                        theme.transitions.duration.standard,
                                    easing: theme.transitions.easing.easeInOut
                                }
                            )}`,
                            width: '100%',
                            height: '100%',
                            boxShadow: theme.shadows[12],
                            borderRadius: '20px',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            src={images[index]}
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                height: '100%',
                                zIndex: '2',
                                objectPosition: 'center',
                                transition: `${theme.transitions.create(
                                    ['all', 'transform'],
                                    {
                                        duration:
                                            theme.transitions.duration.standard,
                                        easing: theme.transitions.easing
                                            .easeInOut
                                    }
                                )}`
                            }}
                            alt='Imagen actual'
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            position: 'absolute',
                            height: '70%',
                            right: '-20%',
                            top: '10%',
                            transition: `${theme.transitions.create(
                                ['all', 'transform'],
                                {
                                    duration:
                                        theme.transitions.duration.standard,
                                    easing: theme.transitions.easing.easeInOut
                                }
                            )}`,
                            boxShadow: theme.shadows[12],
                            borderRadius: '20px',
                            overflow: 'hidden',
                            filter: 'blur(8px)'
                        }}
                    >
                        <img
                            src={
                                index === maxIndex - 1
                                    ? images[0]
                                    : images[index + 1]
                            }
                            style={{}}
                            alt='Imagen siguiente'
                        />
                    </Box>
                    <CarrouselPrevButton prevImage={prevImage} />
                    <CarouselNexButton nextImage={() => nextImage()} />
                </Box>
            )}
        </Container>
    )
}