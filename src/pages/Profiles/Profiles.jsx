import React, { useEffect, useState } from 'react';
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const Profiles = ({ user, animoods, deleteAnimood }) => {
  const [profile, setProfile] = useState()

  useEffect(()=> {
    const fetchData = async () => {
      const data = await profileService.getProfile(user.id)
      setProfile(data.profile)
    }
    fetchData()
  }, [user.id])

  return (
    <>
      <h1>Vibecheck {user.name}</h1>
      {profile ? 
        <>
        {animoods.map((animood) => (
          animood.profile_id === profile.id && 
          <ProfileCard
            animood={animood}
            deleteAnimood={deleteAnimood} 
            key={animood.id} 
            />
        ))}
        </>
      :
        <p>No animoods yet</p>
      }
    </>
  )
}
 
export default Profiles