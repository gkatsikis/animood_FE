const AnimoodInput = ({ form, handleChange }) => {
  return ( 
    <div className='input-box'>
      <label htmlFor="name">Name</label>
      <input
      className="input"
      type="text"
      required name="name" placeholder="  e.g. Naruto"
      onChange={handleChange}
      />
      <label htmlFor="theme">Theme</label>
      <input 
      className="input"
      type="text"
      required name="theme" placeholder="  e.g. Determination"
      onChange={handleChange} 
      />
      <label htmlFor="episode">Episode</label>
      <input 
      className="input"
      type="text"
      name="episode" placeholder="  e.g. ep 123 or ch 360"
      onChange={handleChange} 
      />
      <label htmlFor="story">Story</label>
      <textarea 
      className="input-area"
      type="text"
      required name="story" placeholder=" What's the story behind this scene"
      onChange={handleChange}
      />
    </div>
   );
}
 
export default AnimoodInput;