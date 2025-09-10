 import { useState,useRef } from "react";
import { useNavigate } from "react-router";

 export default function GetDifficultly(){
 
 const [difficulty, setDifficulty] = useState<string>("");
 const navigate = useNavigate();
 

  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    let difficulty = ""
    if (formData.get("easy")) {
      difficulty = "Easy";
    } else if (formData.get("hard")) {
      difficulty = "Hard";
    } else {
      difficulty = "None selected";
    }
    navigate('/game', {state:{from:"difficulty",diff:difficulty}})
  }

  return (
    <>
    <p>are you redy?</p>
    
      <form ref={formRef} onSubmit={handleSubmit }>
        <label htmlFor="easy">Easy</label>
        <input type="checkbox" name="easy" id="easy" />
        <label htmlFor="hard">Hard</label>
        <input type="checkbox" name="hard" id="hard" />
        <button type="submit">ok</button>
      </form>
    </>
  );
}
