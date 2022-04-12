import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = ({ user, profile }) => {
  return (
    <>
      <h1>Vibecheck {user.user.name}</h1>
      {profile ? 
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