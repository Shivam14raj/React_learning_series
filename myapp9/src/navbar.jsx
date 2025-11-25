import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     <ul>
        <li>
            <NavLink to='/' className={({isActive})=> isActive? "active-link": "" } > Home</NavLink>
        </li>  
        <li>
            <Link to='/about'> About page  </Link>
        </li>
        <li>
            <Link to='/contact'>Contact page  </Link>
        </li>
     </ul>
    
    </>
  )
}
// navlink for style mtlb isactive wala flag hota hai available 
export default Navbar;
