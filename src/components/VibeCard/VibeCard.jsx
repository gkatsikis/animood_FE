
const VibeCard = (props) => {
  return ( 
    <>
      <div className="card-content">
        <h2>{props.animood.name}</h2>
        <h3>Feels~ {props.animood.theme}</h3>
        <h3>Episode: {props.animood.episode}</h3>
        <p>What did it make you feel?{props.animood.story}</p>
      </div>
    </>
   );
}

export default VibeCard