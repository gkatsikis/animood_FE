import React, { useState, useEffect } from 'react';

const AnimoodForm = (props) => {
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id
  }

  return ( 
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <p>AnimoodInput</p>
          <button type="submit" className="btn submit">Add Mood</button>
        </form>
      </section>
    </>
   );
}
 
export default AnimoodForm;