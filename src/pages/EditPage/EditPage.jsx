import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const EditPage = (props) => {
  const location = useLocation()
  const [form, setForm] = useState(location.state.animood)
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()
  const navigate = useNavigate()

  const handleChange = evt => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [form])

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.updateAnimood(form)
    navigate('/profile')
  }
  console.log('props on edit page', props)
  console.log('profile', location)

  return ( 
    <>
    {!validForm && <p>error</p>}
    <form className="input-box" ref={formElement}>
      <label htmlFor="name">Name</label>
      <input
      className="input"
      type="text"
      required name="name"
      value={form.name}
      onChange={handleChange}
      />
      <label htmlFor="theme">Theme</label>
      <input
      className="input" 
      type="text"
      required name="theme"
      value={form.theme}
      onChange={handleChange}
      />
      <label htmlFor="episode">Episode or Chapter</label>
      <input 
      className="input"
      type="text"
      name="episode"
      value={form.episode}
      onChange={handleChange}
      />
      <label htmlFor="story">Story</label>
      <textarea 
      className="input-area"
      type="text"
      required name="story"
      value={form.story}
      onChange={handleChange}
      />
      <button type="submit" className="btn" onClick={handleSubmit} >Submit</button>
    </form>
    </>
   );
}
 
export default EditPage;