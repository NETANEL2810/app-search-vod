// import logo from './logo.svg';\
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./comps/home";
import VodInput from "./comps/vodInput";
import MovieInfo from "./comps/movieInfo";

import Footer from "./comps/footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <VodInput></VodInput>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/info/:id" element={<MovieInfo/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
