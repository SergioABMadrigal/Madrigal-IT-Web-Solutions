
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Solutions from './Pages/Solutions';
import Error404 from './Pages/Error404';
import FloatingShape from './Components/FloatingShape';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
        <FloatingShape color='bg-blue-900' size='w-32 h-32' top='-5%' left='10%' delay={0} />
        <FloatingShape color='bg-yellow-500' size='w-24 h-24' top='70%' left='80%' delay={5} />
        <FloatingShape color='bg-yellow-400' size='w-16 h-16' top='40%' left='-10%' delay={2} />
        <FloatingShape color='bg-blue-800' size='w-20 h-20' top='20%' left='50%' delay={3} />
        <FloatingShape color='bg-yellow-600' size='w-28 h-28' top='80%' left='20%' delay={7} />
        
      <Navbar />

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
