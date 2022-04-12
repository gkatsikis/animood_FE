import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AnimoodInput from '../AnimoodInput/AnimoodInput';

const AnimoodForm = (props) => {
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.addAnimood(form)
    Navigate('/animood')
  }

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