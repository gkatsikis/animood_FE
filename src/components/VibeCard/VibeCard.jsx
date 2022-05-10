
const VibeCard = (props) => {
  return ( 
    
    <div className="card">
      <div className="container">
        <div className="front">
          <div className="inner">
            <h2 className="content">{props.animood.name}</h2>
            <h3 className="content">Feels~ {props.animood.theme}</h3>
          </div>
      </div>
      <div className="back">
        <div className="inner">
          <h3 className="content">Episode: {props.animood.episode}</h3>
          <p className="content">{props.animood.story}</p>
        </div>
      </div>
      </div>
    </div>
   );
}

export default VibeCard