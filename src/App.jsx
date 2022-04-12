import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// Components
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import AnimoodList from './pages/AnimoodList/AnimoodList'

// Services
import * as authService from './services/authService'
import * as aniService from './services/animoods'
import { useEffect } from 'react/cjs/react.production.min'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [animoods, setAnimoods] = useState([])
  console.log(user)

  // useEffect(() => {
  //   //fetch data from animoods service
  // })

  const addAnimood = async (animoodData) => {
    const animood = await aniService.create(animoodData)
    setAnimoods([...animoods, animood])
  }

  const updateAnimood = async (animoodData) => {

  }

  const deleteAnimood = async (id) => {

  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles user={user} /> : <Navigate to="/login" />}
        />
        <Route
        path="/animood" 
        element={<AnimoodList />} 
        />
      </Routes>
    </>
  )
}

export default App
