import React from 'react'
import Logo from './assets/victory.jpg'

function About () {
    return (
        <div className="App">
        <h1>
          Supreme   
          <img src={Logo} alt="" width="200" height="200"/>
          Victory!!!!!
        </h1>
        <NavBar></NavBar>
      </div>
    
    )
}

export default About