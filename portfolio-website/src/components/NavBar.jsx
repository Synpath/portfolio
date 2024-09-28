import Logo from '../assets/victory.jpg' //variable name + the path where its from

function NavBar() {
    return (
        <div   className="navbar">
            <div className="leftside">
                <img src={Logo} alt=""/> {/*needs alt text to display if img doesnt load*/}
                
                
            </div>
            <div className="rightside">

            </div>
        </div>
    )
}

export default NavBar