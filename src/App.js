import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import Footer from './components/Footer';
import Rooms from './components/Rooms';
import About from './components/About';
import Dinningroom from './components/Dinningroom';
import Home from './components/Home';
import Livingroom from './components/Livingroom';
import Bedroom from './components/Bedroom';
import Smallspaces from './components/Smallspaces';
import Outdoorspaces from './components/Outdoorspaces';
import Contact from './components/Contact';
import SetToTop from './components/SetToTop';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar className='position-fixed'/>
        <SetToTop />
        
        <Routes>
          <Route path="/" element={<Rooms />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Dinningroom" element={<Dinningroom />} />
          <Route path="/Livingroom" element={<Livingroom />} />
          <Route path="/Bedroom" element={<Bedroom />} />
          <Route path="/Smallspaces" element={<Smallspaces />} />
          <Route path="/Outdoorspaces" element={<Outdoorspaces />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer className='mt-auto position-fixed' />
      </div>
    </Router>
  );
};

export default App;
