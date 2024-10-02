import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
       <nav>
        <ul>
            <li>
                <NavLink to="/" exact>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about"> About Me </NavLink>
            </li>
        </ul>
       </nav>
        
    )
}

export default NavBar