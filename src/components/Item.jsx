import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ items }) {
  console.log(items);
  return (
    <>
      {items.map((item) => {
        return(
          <Card sx={{ width:'33rem',height:"17rem",borderRadius: 5}} key={items.id}>
            <CardActionArea sx={{display:'flex',flexDirection:'row', height:'100%', width:'33rem', justifyContent: 'space-between'}}>
              <CardMedia
                component="img"
                sx={{
                  minWidth:'15rem',height:'15rem',
                  padding:'.8rem',
                  objectFit:'cover',
                  borderRadius:'2rem',
                }}
                image={`${process.env.PUBLIC_URL}/imgs/${item.img}`}
                alt="green iguana"
                
              />
              <CardContent sx={{padding:'1rem', width:'40rem'}}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                >{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>)})}
    </>
  );
}
