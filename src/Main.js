import React from 'react'

const Main = () => {
  return (
    <>
        <main className='Main'>
          <article className='Article-container Hero-container'>
            <section className='Hero'>
              <h1 className='Title'>Little Lemon</h1>
              <p className='Hero-subtitle'>Chicago</p>
              <p className='Hero-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
              <button className='Btn Reservation-btn'>
                Reserve a Table
              </button>
            </section>
          </article>
          <article className='Article-container Specials-container'>
            <section className='This-weeks-specials-container'>
              <h1 className='Specials-title'>This weeks specials!</h1>
              <button className='Btn Menu-btn'>
                Online Menu
              </button>
            </section>
            <section className='Specials-container'>
              <div className='Specials'>
                <h5 className='Specials-name'>Special One</h5>
                <p className='Specials-price'>Price</p>
                <div className='Specials-details-container'>
                  <p className='Specials-details-text'>Text</p>
                </div>
                <div className='Specials-order-link-container'>
                  <p className='Specials-order-link'>Order a delivery</p>
                </div>
              </div>
              <div className='Specials'>
                <h5 className='Specials-name'>Special Two</h5>
                <p className='Specials-price'>Price</p>
                <div className='Specials-details-container'>
                  <p className='Specials-details-text'>Text</p>
                </div>
                <div className='Specials-order-link-container'>
                  <p className='Specials-order-link'>Order a delivery</p>
                </div>
              </div>
              <div className='Specials'>
                <h5 className='Specials-name'>Special Three</h5>
                <p className='Specials-price'>Price</p>
                <div className='Specials-details-container'>
                  <p className='Specials-details-text'>Text</p>
                </div>
                <div className='Specials-order-link-container'>
                  <p className='Specials-order-link'>Order a delivery</p>
                </div>
              </div>
            </section>
          </article>
        </main>
    </>
  )
}

export default Main;