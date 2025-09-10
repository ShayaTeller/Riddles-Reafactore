import { useNavigate, } from "react-router"
import { context, rolecontext } from "../contexts/stroe";
import { useContext } from "react";
// import AddNewRiddle from "../components/NewRiddle";

export default function Menu(){
      const {user} = useContext(context)
      const {role} = useContext(rolecontext)
    const navigate = useNavigate();
    if(role=="user"){return(<>
    <h1>menu</h1>
    <p>{`hello ${user} your role is:${role}`}</p>
    <button onClick={()=>{navigate('/difficultly')}} >start game</button>
    <button onClick={()=>{navigate('/newriddle')}}>create new riddle</button>
    <button onClick={()=>{navigate('/readriddles')}}  >read all riddles</button>
    <button>view loadboard</button>
    <button>exsit</button></>) }
    
    if(role=="admin"){
                   return(<>

    <h1>menu</h1>
    <p>{`hello ${user} your role is:${role}`}</p>
    <button onClick={()=>{navigate('/difficultly')}} >start game</button>
    <button onClick={()=>{navigate('/newriddle')}}>create new riddle</button>
    <button onClick={()=>{navigate('/readriddles')}}  >read all riddles</button>
    <button>update riddle</button>
    <button>delete riddle</button>
    <button>view loadboard</button>
    <button>exsit</button>
    </>)

    }
 
}