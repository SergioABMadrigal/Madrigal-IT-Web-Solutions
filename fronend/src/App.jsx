import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Classes from './Pages/Classes';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

function App() {

  return (
<div>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
</div>
  )
}

export default App
