import React from 'react';
import greeksalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg'
import lemondessert from  '../assets/lemon dessert.jpg'

const Menu = () => {
  return (
    <>
      <article className='article-container specials-article-container'>
        <section className='this-weeks-specials-container'>
          <h1 className='specials-title'>This weeks specials!</h1>
          <button className='btn menu-btn'>
            Online Menu
          </button>
        </section>
        <section className='specials-container'>
          <div className='specials'>
            <img src={greeksalad} alt='Image of greek salad' className='food-image'/>
            <div className='specials-padding'>
              <div className='specials-name-and-price'>
                <h5 className='specials-name'>Greek Salad</h5>
                <h5 className='specials-price'>$12.99</h5>
              </div>
              <div className='specials-details-container'>
                <p className='specials-details-text'>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
              </div>
              <div className='specials-order-link-container'>
                <p className='specials-order-link'>Order a delivery</p>
              </div>
            </div>
          </div>
          <div className='specials'>
            <img src={bruchetta} alt='Image of bruchetta' className='food-image'/>
            <div className='specials-padding'>
              <div className='specials-name-and-price'>
                <h5 className='specials-name'>Bruchetta</h5>
                <h5 className='specials-price'>$5.99</h5>
              </div>
              <div className='specials-details-container'>
                <p className='specials-details-text'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with sald and olive oil</p>
              </div>
              <div className='specials-order-link-container'>
                <p className='specials-order-link'>Order a delivery</p>
              </div>
            </div>
          </div>
          <div className='specials'>
            <img src={lemondessert} alt='Image of lemon dessert' className='food-image'/>
            <div className='specials-padding'>
              <div className='specials-name-and-price'>
                <h5 className='specials-name'>Lemon Dessert</h5>
                <h5 className='specials-price'>$5.00</h5>
              </div>
              <div className='specials-details-container'>
                <p className='specials-details-text'>This comes straight from Grandma's recipe book, every last ingredient is as authentic as can be imagined.</p>
              </div>
              <div className='specials-order-link-container'>
                <p className='specials-order-link'>Order a delivery</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default Menu;