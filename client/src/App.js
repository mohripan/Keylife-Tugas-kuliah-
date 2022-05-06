import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen.jsx';
import Login from './screens/login/Login.jsx';
import './App.css';

const data = [{id: '1',}, {id: '2',},]

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path='/login/:id' element={<Login id={data}/>} />
      </Routes>
    </Router>
  )
}

export default App