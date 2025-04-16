
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Solutions from './Pages/Solutions';
import Error404 from './Pages/Error404';
import UnderDevelopment from './Components/UnderDevelopment';

function App() {

  return (
    <div className="flex flex-col min-w-[500px] min-h-screen">
        
        
      <Navbar />
      <UnderDevelopment />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
