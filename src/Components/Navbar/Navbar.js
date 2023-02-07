import React from 'react'
import './Navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {GiGymBag} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

   const List = useSelector((state)=>state.cartItem.value)
   const tItem = List ? List.length : null
   const nav = useNavigate();
  return (
    <div className="n-wrapper">

       <div className="n-left">
          <img src="https://png.pngtree.com/png-vector/20220716/ourmid/pngtree-nft-sign-concept-png-image-png-image_5983889.png" alt="" />
       </div>

       <div className="n-right">

          <AiFillHome onClick={()=>nav('/')} />
          
          
          <GiGymBag className='bag' onClick={()=>nav('/Cart')}>
          
          </GiGymBag>

{
   tItem ? <span className='bb'>{tItem}</span> : null
}
          
       
        
       

       </div>

    </div>
  )
}

export default Navbar

