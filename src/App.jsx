import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import IndexPost from './Pages/IndexPost';


function App() {
  return (
    <>
    {/* Defining routes */}
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/indexpost' element={<IndexPost />} />
        
        </Routes>
    
    </>
  )
}

export default App
