import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';



const ProfileCard = ({ user, profile, animood, deleteAnimood }) => {
  const navigate = useNavigate()

  const handleDelete = async () => {
    deleteAnimood(animood.id)
    navigate('/profile')
  }

  return ( 
    <>
    <form action="">
      <div className="card-content">
        <h2>Anime Name: {animood.name}</h2>
        <h3>Theme: {animood.theme}</h3>
        <h3>Episode/Chapter: {animood.episode}</h3>
        <p>Story: {animood.story}</p>
        <Link
              className='btn'
              to='/edit'
            state={{ animood }}
            >
             <button className="btn">Edit</button>
            </Link>
        
        <button type="button" onClick={handleDelete} className="btn">Delete</button>
      </div>
      </form>
    </>
   );
}
 
export default ProfileCard;