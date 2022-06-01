import React, { useState } from 'react';
import AnimoodInput from '../AnimoodInput/AnimoodInput';
import { useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button'


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
        <form onSubmit={handleSubmit} className="add-form">
          <AnimoodInput form={form} handleChange={handleChange}/>
            <button type="submit" className="btn btn-add"><Button variant="contained" className="material-button">Add Mood</Button></button>
        </form>
      </section>
    </>
   );
}
 
export default AnimoodForm;