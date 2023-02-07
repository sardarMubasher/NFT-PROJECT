import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import './Cart.css'
import { list } from '../Work/List'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

const Cart = () => {

    const List = useSelector((state)=> state.cartItem.value)
    const data = List ? List : null
  return (
    <>
    <Navbar/>

    {
      data.length>0 ?  <div className="Cart-W">

     
      
      {
          data.map((i,a)=>{
           return(
              <div id={a} className="C-Card">
              <div className="C-up">
                  <img src={list[i.listNo][i.pNo].img} alt="" />
              </div>
  
              <div className="c-down">
                  <span>{list[i.listNo][i.pNo].name}</span>
                  <span>Price</span>
                 <button className='w-btn'>Buy Now</button>
              </div>
             </div>
           )
          })
      }
  
  
            
      </div>
      :   <div className='empty'>
      <span>No Items in the Cart</span>
     <NavHashLink to='/#work'><button className='w-btn'>Shop Now</button></NavHashLink>
    </div>
    }
    
   

    </>
  )
}

export default Cart