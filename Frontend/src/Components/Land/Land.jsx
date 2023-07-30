import React from 'react'
import { Button, Typography,Box } from '@mui/material'
const Land = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'center',
        mt:2,
      }}>
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'

          }}>
            <Typography sx={{
              fontFamily:'Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
              fontSize:'3rem',
              fontWeight:900,
            }}>
              Explore A New World.

            </Typography>
            <Typography sx={{
               fontFamily:'Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
               fontSize:'1rem',
               color:'gray',

            }}>
              No matter where in the world yoyu wnat to go, we can help you get there

            </Typography>
            <Button sx={{
              background:'wheat',
              color:'black',
              fontWeight:700,
              fontFamily:'Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
              width:'100px',
              mt:3

            }}> 
              Explore Now
            </Button>

          </Box>
          <Box>
            <img src='/home.png' height={500} width={600}/>
          </Box>
      </Box>
  )
}

export default Land