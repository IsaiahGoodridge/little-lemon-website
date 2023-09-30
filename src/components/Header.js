import React from 'react'
import restaurantfood from '../assets/restauranfood.jpg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className='header'>
        <article className='article-container hero-container' id='hero-container' >
            <section className='hero'>
              <h1 className='title'>Little Lemon</h1>
              <p className='hero-subtitle'>New York</p>
              <p className='hero-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
              <Link to="/booking">
                <button aria-label="On Click">Reserve Table</button>
              </Link>
            </section>
          </article>
      </header>
    </>
  );
};

export default Header