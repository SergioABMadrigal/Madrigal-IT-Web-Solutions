
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Solutions from './Pages/Solutions';

function App() {

  return (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </div>
    <Footer />
  </div>
  )
}

export default App
