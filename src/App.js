import React from "react";
import Navbar from './screens/Navbar.tsx'
import Home from './screens/Home.jsx'
import ItemDetailContainer from './screens/ItemDetailContainer'
import Main from './screens/Main.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>      
        <Route index element={<Home/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
