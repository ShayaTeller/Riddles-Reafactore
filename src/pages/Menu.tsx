import { useNavigate } from "react-router"
// import AddNewRiddle from "../components/NewRiddle";

export default function Menu(){
    const navigate = useNavigate();
    return(<>
    <h1>menu</h1>
    <button  >start game</button>
    <button onClick={()=>{navigate('/newriddle')}}>create new riddle</button>
    <button onClick={()=>{navigate('/readriddles')}}  >read all riddles</button>
    <button>update riddle</button>
    <button>delete riddle</button>
    <button>view loadboard</button>
    <button>exsit</button>
    </>)
}