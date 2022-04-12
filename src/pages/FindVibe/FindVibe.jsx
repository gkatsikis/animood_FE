import VibeCard from "../../components/VibeCard/VibeCard";

const FindVibe = ({animoods}) => {
  return ( 
    <>
      <h1>Find Your Vibe</h1>
      {animoods.map((animood) => (
        <VibeCard 
        key={animood.id}
        animood={animood} />
      ))}
    </>
   );
}
 
export default FindVibe