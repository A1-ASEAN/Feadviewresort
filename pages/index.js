import * as React from 'react';
import Box from '@mui/joy/Box';
import { Avatar, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Styled from "../styles/Index.module.css"
import { Stack } from '@mui/system';


export default function BasicCard() {

  


  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/bg.jpg')`,
          minWidth: "100vw",
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundSize: 'cover'
        }}
      >


        <Container maxWidth="lg" sx={{ pt: 5, }}>
          <Grid container spacing={0} justifyContent="center"
            alignItems="center" >
            <Grid item lg={4} >
              <Stack direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}>
                <Avatar alt="Remy Sharp" src="/logo.jpg" />
                <Typography variant="h4" color={"#ffff"}>Faedviewresort</Typography>
              </Stack>


            </Grid>
            <Grid item lg={8}>



              <Stack direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={5}>
                <Typography className={Styled.h1} variant="h4" color={"#ffff"}>Home</Typography>
                <Typography className={Styled.h1} variant="h4" color={"#ffff"}>About</Typography>
                <Typography className={Styled.h1} variant="h4" color={"#ffff"}>Review</Typography>
                
                <img className={Styled.h1} src='/facebook.svg' />
                <img className={Styled.h1} src='/ig.svg' />
                <img className={Styled.h1} src='/tikkok.svg' />
              </Stack>

            </Grid>

          </Grid>
        </Container>




      </Box>

    </>
  );
}