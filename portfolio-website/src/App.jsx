import { useState } from 'react'
import './css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

//npm run dev 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div>
     <NavBar /> 
    </div>
      <Routes>
        <Route path="/home" element={<Home />} /> { /* renders the home page when url is http:local:/home */}
        <Route index element={<Home />} /> {/* renders the home page when url is http:local:5713/ */}
        {/* index element renders the specified element whenever the path is the default "/" (empty path) */}
        
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
