import React from 'react'
import greeksalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.svg'
import lemondessert from  './assets/lemon dessert.jpg'

const Main = () => {
  return (
    <>
        <main className='Main'>
          <article className='Article-container Hero-container' id='Hero-container' >
            <section className='Hero'>
              <h1 className='Title'>Little Lemon</h1>
              <p className='Hero-subtitle'>New York</p>
              <p className='Hero-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
              <button className='Btn Reservation-btn'>
                Reserve a Table
              </button>
            </section>
          </article>
          <article className='Article-container Specials-article-container'>
            <section className='This-weeks-specials-container'>
              <h1 className='Specials-title'>This weeks specials!</h1>
              <button className='Btn Menu-btn'>
                Online Menu
              </button>
            </section>
            <section className='Specials-container'>
              <div className='Specials'>
                <img src={greeksalad} alt='Image of greek salad' className='Food-image'/>
                <div className='Specials-padding'>
                  <div className='Specials-name-and-price'>
                    <h5 className='Specials-name'>Greek Salad</h5>
                    <h5 className='Specials-price'>$12.99</h5>
                  </div>
                  <div className='Specials-details-container'>
                    <p className='Specials-details-text'>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
                  </div>
                  <div className='Specials-order-link-container'>
                    <p className='Specials-order-link'>Order a delivery</p>
                  </div>
                </div>
              </div>
              <div className='Specials'>
                <img src={bruchetta} alt='Image of bruchetta' className='Food-image'/>
                <div className='Specials-padding'>
                  <div className='Specials-name-and-price'>
                    <h5 className='Specials-name'>Bruchetta</h5>
                    <h5 className='Specials-price'>$5.99</h5>
                  </div>
                  <div className='Specials-details-container'>
                    <p className='Specials-details-text'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with sald and olive oil</p>
                  </div>
                  <div className='Specials-order-link-container'>
                    <p className='Specials-order-link'>Order a delivery</p>
                  </div>
                </div>
              </div>
              <div className='Specials'>
                <img src={lemondessert} alt='Image of lemon dessert' className='Food-image'/>
                <div className='Specials-padding'>
                  <div className='Specials-name-and-price'>
                    <h5 className='Specials-name'>Lemon Dessert</h5>
                    <h5 className='Specials-price'>$5.00</h5>
                  </div>
                  <div className='Specials-details-container'>
                    <p className='Specials-details-text'>This comes straight from Grandma's recipe book, every last ingredient is as authentic as can be imagined.</p>
                  </div>
                  <div className='Specials-order-link-container'>
                    <p className='Specials-order-link'>Order a delivery</p>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
    </>
  )
}

export default Main;