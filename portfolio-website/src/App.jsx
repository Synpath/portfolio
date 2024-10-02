import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Logo from './assets/victory.jpg'

//npm run dev 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>
          Supreme   
          <img src={Logo} alt="" width="200" height="200"/>
          Victory!!!!!
        </h1>
      </div>
    </>
  )
}

export default App
