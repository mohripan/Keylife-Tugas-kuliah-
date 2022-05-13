import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HomeScreen, Login, DetailSignUp, SingleProduct, NotFound, CartScreen, Profile} from "./screens";
import './App.css';

const data = [{id: '1',}, {id: '2',},]

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path='/login/:id' element={<Login id={data}/>} />
        <Route path='/signup-detail' element={<DetailSignUp />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart/:id" element={<CartScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App