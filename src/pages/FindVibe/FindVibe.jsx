import VibeCard from "../../components/VibeCard/VibeCard";

const FindVibe = ({animoods}) => {
  return ( 
    <>
      <h1>Find Your Vibe</h1>
      <div className="cards">
      {animoods.map((animood) => (
        <VibeCard 
        key={animood.id}
        animood={animood} />
      ))}
      </div>
    </>
   );
}
 
export default FindVibe