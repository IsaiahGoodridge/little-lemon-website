import React from 'react'
import About from './About'
import Menu from './Menu'
import Reservations from './Reservations'
import OrderOnline from './OrderOnline'
import {Routes, Route, Link} from 'react-router-dom'
import App from './App'

const Nav = () => {
  return (
    <>
        <nav className='Navbar'>
            <ul className='Nav-links'>
                <Link to="/home" className='Link'>Home</Link>
                <Link to="/about" className='Link'>About</Link>
                <Link to="/menu" className='Link'>Menu</Link>
                <Link to="/reservations" className='Link'>Reservations</Link>
                <Link to="/order-online" className='Link'>Order Online</Link>
            </ul>
        </nav>
        <Routes>
          <Route path='/home' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/order-online' element={<OrderOnline />} />
        </Routes>
    </>
  )
}

export default Nav;