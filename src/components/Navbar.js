import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar () {
    const [click, setClick]= useState(false);
 const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const onMouseEnter= () => {
        if (window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };
    const onMouseLeave= () => {
        if (window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };
    

    return(
        <>
        <div>
        <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Happychemical
        </Link>
<div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
</div>
< ul className={click ? 'nav-menu active' : 'nav-menu'}>
       
    <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            HOME
        </Link>
    </li>
    <li className='nav-item' 
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}>
        <Link to='/Shop' className='nav-links' onClick={closeMobileMenu}>
          PRODUCTS 
        </Link>
        {dropdown && <Dropdown/>}
    </li>
    <li className='nav-item'>
        <Link to='/Contactus' className='nav-links' onClick={closeMobileMenu}>
      CONTACT US
        </Link>
    </li>
    <li className='nav-item'>
        <Link to='/Aboutus' className='nav-links' onClick={closeMobileMenu}>
           ABOUT US
        </Link>
    </li>
    <li className='nav-item'>
        <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
        <i class="fa-solid fa-cart-shopping fa-beat"> </i>
        </Link>
    </li>
</ul>
            </nav>
            </div>
           
            </>
    );
}
export default Navbar;