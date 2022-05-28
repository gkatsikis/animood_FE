import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul className="nav-ul">
            <div className="nav-wrap">
              <div className="logo-img">
            <li>
              <img className="robin" src="https://i.imgur.com/Q2zdF4v.png" alt="robin from one piece" />
            </li>
            </div>
            <div className="nav-links">
              
            <li><Link to="/profile"><span class="material-symbols-outlined icon">
            account_circle
            </span><div className="text">Profile</div></Link></li>
            <li><Link to="/animood"><span class="material-symbols-outlined icon">
            add_circle
            </span><div className="text">Add a Mood</div></Link></li>
            <li><Link to="/"><span class="material-symbols-outlined icon">
            view_carousel
            </span><div className="text">Browse Moods</div></Link></li>
            <li><Link to="" onClick={handleLogout}><span class="material-symbols-outlined icon">
            logout
            </span><div className="text">Logout</div></Link></li>
            </div>
            </div>
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
