import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul className="nav-ul">
            <li>
              <img className="robin" src="https://i.imgur.com/Q2zdF4v.png" alt="robin from one piece" />
            </li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/animood">Add a Mood</Link></li>
            <li><Link to="/">Browse Moods</Link></li>
            <li><Link to="" onClick={handleLogout}>Logout</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li className="login">
              <Link to="/login">
              Login
                </Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
