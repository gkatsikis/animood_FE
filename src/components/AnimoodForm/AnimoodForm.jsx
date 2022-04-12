import { getNodeText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AnimoodInput from '../AnimoodInput/AnimoodInput';
import { userParams, useNavigate } from 'react-router-dom'
import { getOne } from '../../services/animoods'

const AnimoodForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.addAnimood(form)
    navigate('/animood')
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.animood.id,
        name: data.animood.name,
        theme: data.animood.theme,
        episode: data.animood.episode,
        story: data.animood.story
      })
    }
    id && fetchOne()
    return () => setForm({})
  })

  return ( 
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <AnimoodInput />
          <button type="submit" className="btn submit">Add Mood</button>
        </form>
      </section>
    </>
   );
}
 
export default AnimoodForm;