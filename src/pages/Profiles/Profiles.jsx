import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const Profiles = ({ user, profile, animoods, deleteAnimood }) => {
  return (
    <>
      <h1>Vibecheck {user.name}</h1>
      {profile ? 
        <>
        {animoods.map((animood) => {
          if (animood.profile_id === profile.id) {
            return <ProfileCard
            animood={animood}
            deleteAnimood={deleteAnimood} 
            key={animood.id} 
            />
          }
        })}
        </>
      :
        <p>No animoods yet</p>
      }
    </>
  )
}
 
export default Profiles