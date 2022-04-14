import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// Components
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import AnimoodList from './pages/AnimoodList/AnimoodList'
import FindVibe from './pages/FindVibe/FindVibe'

// Services
import * as authService from './services/authService'
import * as aniService from './services/animoods'
import EditPage from './pages/EditPage/EditPage'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [animoods, setAnimoods] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const data = await aniService.getAll()
      setAnimoods(data)
    }
    fetchData()
  }, [])
  
  const addAnimood = async (animoodData) => {
    const animood = await aniService.create(animoodData)
    setAnimoods([...animoods, animood])
  }

  const updateAnimood = async (animoodData) => {
      const updatedAnimood = await aniService.update(animoodData)
      setAnimoods(animoods.map((animood) => (
        animood.id === updatedAnimood.id ? updatedAnimood : animood
      )))
  }

  const deleteAnimood = async (id) => {
    console.log('deleteAnimood id', id)
    await aniService.deleteOne(id)
    setAnimoods(animoods.filter(animood => animood.id !== parseInt(id)))
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
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile"
          element={user ? <Profiles user={user} animoods={animoods} deleteAnimood={deleteAnimood} /> : <Navigate to="/login" />}
        />
        <Route
        path="/animood" 
        element={<AnimoodList addAnimood={addAnimood} user={user} />} 
        />
        <Route
        path="/"
        element={<FindVibe animoods={animoods} />} />
        <Route
        path="/edit"
        element={<EditPage updateAnimood={updateAnimood} getOne={aniService.getOne} />} />
      </Routes>
    </>
  )
}

export default App
