import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'

//npm run dev 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} /> { /* renders the home page when url is http:local:/home */}
        <Route index element={<Home />} /> {/* renders the home page when url is http:local:5713/ */}
        {/* index element renders the specified element whenever the path is the default "/" (empty path) */}
        
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
