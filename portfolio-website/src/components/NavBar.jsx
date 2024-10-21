import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'

function NavBar() {
    return (
       <nav>
        <ul>
            <li>
                <NavLink to="/projects"> Projects </NavLink>
            </li>
            <li>
                <NavLink to="/about"> About </NavLink>
            </li>
            <li>
                <NavLink to="/" exact>
                Home
                </NavLink>
            </li>
             
        </ul>
       </nav>
        
    )
}

export default NavBar