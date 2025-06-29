import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Solutions from './Pages/Solutions';
import Error404 from './Pages/Error404';
import SocialMedia from './Components/SocialMedia';
// import ArtDisplay from './Pages/ArtDisplay';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {

  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <ScrollToTop />
      <div className="sticky top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          {/* <Route path="/artdisplay" element={<ArtDisplay />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default App
