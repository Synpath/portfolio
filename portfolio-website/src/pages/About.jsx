import React from 'react'
import Logo from "../assets/okay.jpeg"

function About () {
    return (
        <div>
        <h1> 
            Whoa! Chainsaw Man is pretty good
        </h1>
         <img src={Logo} alt=""/> {/*needs alt text to display if img doesnt load*/}
         <h1>About</h1>
        </div> 
    )
}

export default About