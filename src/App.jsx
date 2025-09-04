import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar';
import HeroSection from './components/Hero';

function App() {
  return (
    <div> 
      <NavBar />
      <div>
        <HeroSection />
      </div>
    </div>
  )
}

export default App
