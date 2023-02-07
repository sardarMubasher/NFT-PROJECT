import React from "react";
import "./Choose.css";
import {GiWallet} from 'react-icons/gi'
import {BsCardChecklist, BsCollectionFill} from 'react-icons/bs'
import {AiOutlineFolderAdd} from 'react-icons/ai'


const Choose = () => {
  return (
    <div className="C-Wrapper">
      <div className="c-text">
        <div className="c-t-hdd">
          <span>Why To Choose</span>
          <span>Us</span>
        </div>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>

      <div className="c-cards">
        <div className="c-content">
            <span><GiWallet size={30}/></span>
            <div>
            <span>Set Up</span>
          <span> Your Wallet</span>
            </div>
         
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>

        <div className="c-content">
        <span><BsCollectionFill size={30}/></span>
          <div>
          <span>Create</span>
          <span> Your Collection</span>
          </div>
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>

        <div className="c-content">
        <span><AiOutlineFolderAdd size={30}/></span>
        <div>
        <span>Add Your</span>
          <span> NFTs</span>
        </div>
          
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>

        <div className="c-content">
        <span><BsCardChecklist size={30}/></span>
        <div>
        <span>List Them</span>
       <span> For Sale</span>
        </div>
        
      <span>   Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
      </div>
    </div>
  );
};

export default Choose;
