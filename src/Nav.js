import React from 'react'

const Nav = () => {
  return (
    <>
        <nav className='Navbar'>
            <ul className='Nav-links'>
                <li><a href="/home" className='Link'>Home</a></li>
                <li><a href="/about" className='Link'>About</a></li>
                <li><a href="/menu"className='Link'>Menu</a></li>
                <li><a href="/reservations"className='Link'>Reservations</a></li>
                <li><a href="/order-online" className='Link'>Order Online</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav;