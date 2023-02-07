import React, { useState } from 'react'
import './Work.css'
import { list } from './List'

import {FaPlay} from 'react-icons/fa'
import { useSelector } from 'react-redux'

import { ItemNo } from '../../Store'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const Work = () => {

    

const dispatch = useDispatch();

const action = ItemNo.actions;

   const [listNo,setListNo] = useState(0)
  
   function moveBack(){
    if(listNo>=1)
    {
        setListNo(listNo-1);
      
    }
   

   }
   function moveNext(){
    if(listNo<=1)
    {
        setListNo(listNo+1);
       
       
    }
   
   
   }
  return (
   
   <div id='work'  className="w-wrapper">
    
    <div className="w-heading">
        <div className="w-h-sub">
        <span>Featured</span>
        <span>ArtWork</span>
        </div>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga alias distinctio minus ullam possimus.
        </span>
    </div>
      
<div  className="w-products">

{
    list[listNo].map((i,a)=> {
       return(
        <div id={a} className="card">

       <div className="w-img">

          <img src={i.img} alt="" />

       </div>
          


        <div className="c-txt">
            <span>{i.name}</span>
          
          <Link to='/Shop'>  <button onClick={()=> dispatch(action.PassNo({listNo,pNo:a}))} className='w-btn'> Watch </button></Link>
          
        </div>

        </div>
       )
    })
}

</div>



<div className='w-move'>
   
    <button style={{visibility:listNo==0?'hidden':'visible'}} onClick={moveBack} className='w-btn'><FaPlay/></button>
    <button style={{visibility:listNo==2?'hidden':'visible'}} onClick={moveNext} className='w-btn'><FaPlay/></button>
</div>

   </div>

  )
}

export default Work