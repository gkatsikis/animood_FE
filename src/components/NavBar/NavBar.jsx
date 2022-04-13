import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul className="nav-ul">
            <li>Welcome, {user.name}</li>
            <li>
              <Link to="/profile">
              Profile</Link></li>
            <li><Link to="/animood">Add a Mood</Link></li>
            <li><Link to="/findvibe">Browse Moods</Link></li>
            <li><Link to="" onClick={handleLogout}>Logout</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li className="login">
              
              <Link to="/login">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
</svg>
                </Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
