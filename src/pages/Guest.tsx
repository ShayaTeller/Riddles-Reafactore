import { useNavigate } from "react-router";

export default function Guest() {
  const navigate = useNavigate();

  return (
    <>
      <h1>welcome to the Guest Page</h1>
      <button onClick={()=>{navigate('/startgame')}}>start game</button>
      <button onClick={()=>{navigate('/loadboard')}}>viwe loadboard</button>

      

    </>
  );
}
