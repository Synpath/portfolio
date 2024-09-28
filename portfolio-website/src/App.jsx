import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>
          Supreme Victory!!!! 
        </h1>
        <NavBar></NavBar>
      </div>
      
    </>
  )
}

export default App
