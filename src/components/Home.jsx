import React from 'react'
import home2 from './../../Assets/Iteration-1-assets/logo.svg'
import banner from './../../Assets/Iteration-1-assets/home-banner.png'
function Home() {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url(./../../Assets/Iteration-1-assets/home-banner.png)] bg-cover bg-no-repeat'>
        <div>
            <div>
              <h1>KOD ACIKTIRIR< br ></br> PİZZA, DOYURUR</h1>
            </div> 
            <div>
           <button className=''>ACIKTIM</button>
            </div>
            
        </div>
    </div>
  ) 
}

export default Home