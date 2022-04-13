import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const ProfileCard = (props) => {
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    
  }

  return ( 
    <>
    <form action="">
      <div className="card-content">
        <h2>Anime Name: {props.animood.name}</h2>
        <h3>Theme: {props.animood.theme}</h3>
        <h3>Episode/Chapter: {props.animood.episode}</h3>
        <p>Story: {props.animood.story}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      </form>
    </>
   );
}
 
export default ProfileCard;