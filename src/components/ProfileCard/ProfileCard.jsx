import { useNavigate, Link } from 'react-router-dom';



const ProfileCard = ({ user, profile, animood, deleteAnimood }) => {
  const navigate = useNavigate()

  const handleDelete = async () => {
    deleteAnimood(animood.id)
    navigate('/profile')
  }

  return ( 
    <div className="profile-container">
    <form action="">
      <div className="pcard-content">
        <h2 className="title">{animood.name}</h2>
        <h3>Theme: {animood.theme}</h3>
        <h3>Episode: {animood.episode}</h3>
        <p className="story">Story: {animood.story}</p>
        <Link
        to='/edit'
        state={{ animood }}
        >
        <button
        type="button" className="btn btn-edit">Edit</button>
        </Link>
        <button type="button" onClick={handleDelete} className="btn btn-delete">Delete</button>
      </div>
      </form>
    </div>
   );
}
 
export default ProfileCard;