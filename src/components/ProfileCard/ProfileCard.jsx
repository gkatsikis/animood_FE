import { useNavigate, Link } from 'react-router-dom';



const ProfileCard = ({ user, profile, animood, deleteAnimood }) => {
  const navigate = useNavigate()

  const handleDelete = async () => {
    deleteAnimood(animood.id)
    navigate('/profile')
  }

  return ( 
    <form action="" className="profile-form">
      <div className="pcard-content">
        <h2 className="title text">{animood.name}</h2>
        <h3 className="text">Theme: {animood.theme}</h3>
        <h3 className="text">Episode: {animood.episode}</h3>
        <p className="story text">Story: {animood.story}</p>
        <div className="btn-container">
          <Link
          to='/edit'
          state={{ animood }}
          >
          <button
          type="button"
          className="btn btn-edit">Edit</button>
          </Link>
          <button type="button" onClick={handleDelete} className="btn btn-delete">Delete</button>
        </div>
      </div>
      </form>
   );
}
 
export default ProfileCard;