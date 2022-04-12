import AnimoodForm from "../../components/AnimoodForm/AnimoodForm";


const AnimoodList = ({addAnimood, user}) => {
  return ( 
    <>
      <h1>Add a Mood</h1>
      <AnimoodForm addAnimood={addAnimood} user={user} />
    </>

   );
}
 
export default AnimoodList;