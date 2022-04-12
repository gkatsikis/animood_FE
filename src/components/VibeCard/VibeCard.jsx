
const VibeCard = (props) => {
  return ( 
    <>
      <div className="card-content">
        <h2>Anime Name: {props.animood.name}</h2>
        <h3>Theme: {props.animood.theme}</h3>
        <h3>Episode/Chapter: {props.animood.episode}</h3>
        <p>Story: {props.animood.story}</p>
      </div>
    </>
   );
}

export default VibeCard