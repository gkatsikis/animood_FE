import React, { useState } from 'react';
import AnimoodInput from '../AnimoodInput/AnimoodInput';
import { useNavigate } from 'react-router-dom'

const AnimoodForm = (props) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.addAnimood(form)
    navigate('/profiles')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  return ( 
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <AnimoodInput form={form} handleChange={handleChange}/>
          <button type="submit" className="btn">Add Mood</button>
        </form>
      </section>
    </>
   );
}
 
export default AnimoodForm;