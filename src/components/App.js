import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Header from './Header/Header';
import SearchPage from './Search/SearchPage' 
import Footer from './Footer/Footer'

function App() {
  return (

    <div className="app">
      <Router>
        <Header />
        <Routes>

        <Route exact path="/search" element={<SearchPage/>}/>
        <Route exact path="/" element={<Home/>}/>

        </Routes>
        
        <Footer />
      </ Router>

    </div>
  );
}

export default App;
