import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Item from "./Item";
import data from "../data/data.json";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Main = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    let promise = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
    promise.then((res) => {
      setItem(res);
    });
  }, []);
  console.log(item);
  return (
    <Box
      className="container"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography gutterBottom variant="h2" component="h2" sx={{ fontWeight: 'bold', color:'#222' }}>
          Products
        </Typography>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Item items={item} />
      </Box>
    </Box>
  );
};

export default Main;
