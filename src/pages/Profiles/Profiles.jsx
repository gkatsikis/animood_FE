import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = (user) => {
  const [profiles, setProfiles] = useState([])
  console.log(user)

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Vibecheck {user.user.name}</h1>
      {profiles.length ? 
        <>
          <h1>This is where AnimoodCard will go get mapped</h1>
        </>
      :
        <p>No animoods yet</p>
      }
    </>
  )
}
 
export default Profiles