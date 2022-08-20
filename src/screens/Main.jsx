import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Item from "./Item";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Spinner from './Spinner.tsx'

const Main = () => {

  const [item, setItem] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true)
  const { name } = useParams()

  useEffect(() => {
    //obteniendo UN doc de la db
/*     const db = getFirestore()
    const docRef = doc(db, "items", "1")
    getDoc(docRef).then((res)=>{
      const data = {id: res.id, ...res.data()}
      setItem(data) */

      //obteniendo toda la colección de la db

      const db = getFirestore()
      const itemCollection = collection(db, "items");
      getDocs(itemCollection).then((snapshot) => {
        const data = snapshot.docs.map(doc=>({id:doc.id, ...doc.data() }))
        if(name){
          setItem(data.filter(producto=> producto.category.toLowerCase() == name.toLowerCase()))
          setLoading(false)
        }else{
          setItem(data)
          setLoading(false)
        }
      })
  }, [])
  if(loading){
    return <Spinner/>
  }
  console.log(item)

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
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(event)=>{
          setSearchText(event.target.value)
        }}/>
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
        <Item items={item} searchText={searchText}/> 
      </Box>
    </Box>
  );
};

export default Main;
