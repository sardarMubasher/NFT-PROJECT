import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
   <div className="Hero">
    
    <div className="left">
      <div className="h-heading">
        <span>Discover Best Digital</span>
        <span>Arts and Collect</span>
        <span>NFTs.</span>
      </div>

      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt consequatur sit tempore dicta, voluptatum corporis velit inventore?</span>

      <div className="h-btn">
        <button>Get Started</button>
        <button>How it works</button>
      </div>
    </div>

    <div className="right">

        <img src="https://www.pngall.com/wp-content/uploads/13/NFT-Character-PNG.png" alt="" />

    </div>

   </div>
  )
}

export default Hero