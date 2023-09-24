import React from 'react';
import Nav from './Nav';
import Logo from './assets/Logo.svg';

const Header = () => {
  return (
    <>
        <header className='Header'>
          <div className='Logo'>
            <img src={Logo} alt="Little Lemon Logo" className='Logo-pic' />
          </div>
          <Nav/>

        </header>
    </>
  )
}

export default Header;