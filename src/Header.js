import React from 'react'
import Nav from 'Nav'

const Header = () => {
  return (
    <>
        <header className='Header'>
          <img src="/assets/Logo.png" alt="Little Lemon Logo" className='Logo' />
          <Nav/>

        </header>
    </>
  )
}

export default Header;