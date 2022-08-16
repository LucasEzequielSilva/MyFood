import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ActionAreaCard({ items, searchText }) {
  let navigate = useNavigate();
  console.log(items);
  const handleChangePath = (id) =>{
    navigate("/item/" + id)

  }

  return (
    <>
      {items.filter(val=>{
        if (searchText == ""){
          return val
        }else if(val.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())){
          return val
        }
      }).map((item, key) => {
        return(
          <Card sx={{ width:'33rem',height:"17rem",borderRadius: 5}} key={items.id} onClick={() => handleChangePath(item.id)}>
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
                  sx={{fontWeight:'bold', color:'#323232'}}
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
