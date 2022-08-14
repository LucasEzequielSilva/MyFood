import React, { Fragment } from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import background from "../assets/background.png";
import Down from "@mui/icons-material/KeyboardArrowDown";
import Main from "./Main"

const Home = () => {
  const Title = styled("h1")({
    color: "#fff",
    fontSize: "5rem",
    fontWeight: "Bold",
  });
  const handleChange = () => {
    window.scrollTo(0, 947)
  };
  return (
    <Fragment>
      <Box
        height="100vh"
        width="100%"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Box sx={{marginLeft:"4rem",width:"24.5rem",height:"100%",display: "flex", justifyContent: "center",alignItems:"start", flexDirection: "column",}}>
          <Title variant="h1" component="h2">
            Encuentra tu comida favorita.
          </Title>
          <Box
            sx={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf:"center",
              cursor: "pointer",
            }}
            onClick={() => handleChange()}
          >
            <Down sx={{opacity:"0.4", transition:"5s"}} />
          </Box>
        </Box>
      </Box>
      <Main/>
    </Fragment>
  );
};

export default Home;