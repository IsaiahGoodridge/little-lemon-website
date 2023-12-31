import React, {useState} from "react";
import Logo from '../assets/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
  return (
    <>
        <nav className={`navbar ${menuOpen ? "open": ""}`}>
            <a href='/' className="logo">
                <img src={Logo} alt='logo' className='logo-pic'/>
            </a>

            {/* mobile hamburger menu*/}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* desktop navbar*/}
            <ul className={`nav-links ${menuOpen ? 'visible' : ""}`} >
                <li className="link">
                    <a href ='/'>Home</a>
                </li>
                <li className="link">
                    <a href ='/'>About</a>
                </li>
                <li className="link">
                    <a href ='/'>Menu</a>
                </li >
                <li className="link">
                    <a href ='/'>Reservations</a>
                </li>
                <li className="link">
                    <a href ='/'>Order Online</a>
                </li>
                <li className="link">
                    <a href ='/'>Login</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav