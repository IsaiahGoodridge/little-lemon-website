import React from 'react'
import Nav from './Nav';

const Header = () => {
  return (
    <>
        <header className='Header'>
          <div className='Logo'>
            <img src="/assets/Logo.png" alt="Little Lemon Logo" className='Logo-pic' />
          </div>
          <Nav/>

        </header>
    </>
  )
}

export default Header;