import React, { Fragment } from "react";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import background from '../assets/background.png'
const Home = () => {
  const Title = styled('h1')({
    color: '#fff',
    marginTop: "20vh",
    marginLeft: "10vw",
    fontSize: "4rem",
    fontWeight:"Bold",
    width: "25%",
  });
  
  return (
    <Fragment>
      <Box height="100vh"width="100%"sx={{display:"flex",flexDirection:"column",backgroundImage:`url(${background})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}}>
      <Title variant="h1" component="h2">
      Encuentra tu comida favorita
      </Title>
      </Box>
    </Fragment>
  );
};

export default Home;
