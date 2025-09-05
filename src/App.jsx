import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar';
import HeroSection from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div> 
      <NavBar />
      <div>
        <HeroSection />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
