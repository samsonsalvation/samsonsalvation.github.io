import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
  return (
    <>
    {/* Defining routes */}
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        </Routes>
    
    </>
  )
}

export default App
