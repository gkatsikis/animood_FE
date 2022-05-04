
const VibeCard = (props) => {
  return ( 
    <div className="card">
      <div className="card-content">
        <div className="content">{props.animood.name}</div>
        <div className="content">Feels~ {props.animood.theme}</div>
        <div className="content">Episode: {props.animood.episode}</div>
        <div className="content">{props.animood.story}</div>
      </div>
    </div>
   );
}

export default VibeCard