import Logo from '../assets/okay.jpeg' //variable name + the path where its from
//<img src={Logo} alt=""/> {/*needs alt text to display if img doesnt load*/}

function NavBar() {
    return (
       
        <div   className="navbar">
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact Me</li>
            </ul>
        </div>
        
    )
}

export default NavBar