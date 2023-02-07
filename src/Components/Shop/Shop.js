import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Shop.css'
import { list } from '../Work/List'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {CartItems} from '../../Store'
const Shop = () => {

  const data = useSelector((state)=> state.itemNo.value)

  const dispatch = useDispatch()
  const action = CartItems.actions

  const List = useSelector((state)=>state.cartItem.value)
  const nav = useNavigate()

  const conList = data.pNo!=null ? data : null
  const image = conList ?  list[conList.listNo][conList.pNo].img : null;
  const name =  conList ?  list[conList.listNo][conList.pNo].name : null

  useEffect(()=>{
    
    if(!image || !conList)
    {
      return nav('/')
    }
  })


 
  

  return (
    <div className="Shop-Wrapper">
      <Navbar/>
  
      <div className="sI-Cont">

        <div className="I-left">
              <img src={image} alt="" />
        </div>

        <div className="I-Right">
          <span>{name}</span>

         <div className="p-det">
          <span>Author : John Wick</span>
          <span>Rating : 4.5</span>
          <span>Sales : 43.2k</span>
        

         </div>

         <button onClick={()=> dispatch(action.updateCart({listNo:data.listNo,pNo:data.pNo}))}  className='w-btn'>Add to Cart</button>

          
  </div>

      </div>
    </div>
  )
}

export default Shop