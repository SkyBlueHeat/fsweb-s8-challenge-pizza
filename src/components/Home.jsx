import React from 'react'
import './Home.css'
import home2 from './../../Assets/Iteration-1-assets/logo.svg'
import banner from './../../Assets/Iteration-1-assets/home-banner.png'
function Home() {
  return (
   <div >
    <header >
      <div className='img-container'>
      <div>
      <img  src="Assets\Iteration-1-assets\logo.svg" alt="" className='form-img' />
      <p className='anasayfa-text'>AnaSayfa - <span className='siparis'>Sipariş Oluştur</span></p>
      </div>        
      </div>      
    </header>

    <section className='hero-section'>
          <div>
              <h3>Position Absolute Acı Pizza</h3>
          </div>         
    </section>
   </div>

   
   
  ) 
}

export default Home