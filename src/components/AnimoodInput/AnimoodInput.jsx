const AnimoodInput = ({ form, handleChange }) => {
  return ( 
    <>
      <label htmlFor="name">Name</label>
      <input
      type="text"
      required name="name" placeholder="e.g. Naruto"
      onChange={handleChange}
      />
      <label htmlFor="theme">Theme</label>
      <input type="text"
      required name="theme" placeholder="e.g. Determination"
      onChange={handleChange} 
      />
      <label htmlFor="episode">Episode or Chapter</label>
      <input type="text"
      name="episode" placeholder="e.g. ep 123 or ch 360"
      onChange={handleChange} 
      />
      <label htmlFor="story">Story</label>
      <textarea type="text"
      required name="story" placeholder="What's the story behind this scene"
      onChange={handleChange}
      />
    </>
   );
}
 
export default AnimoodInput;