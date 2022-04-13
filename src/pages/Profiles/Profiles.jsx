
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const Profiles = ({ user, profile, animoods, deleteAnimood }) => {
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