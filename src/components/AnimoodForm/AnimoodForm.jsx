import React, { useState, useEffect } from 'react';
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

  // useEffect(() => {
  //   const fetchOne = async () => {
  //     const data = await getOne(id)
  //     setForm({
  //       id: data.animood.id,
  //       name: data.animood.name,
  //       theme: data.animood.theme,
  //       episode: data.animood.episode,
  //       story: data.animood.story
  //     })
  //   }
  //   id && fetchOne()
  //   return () => setForm({})
  // }, [id])

  return ( 
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <AnimoodInput form={form} handleChange={handleChange}/>
          <button type="submit" className="btn submit">Add Mood</button>
        </form>
      </section>
    </>
   );
}
 
export default AnimoodForm;