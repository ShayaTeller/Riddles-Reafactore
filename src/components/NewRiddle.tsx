import { useNavigate } from "react-router";
// import type { riddle } from "../utils/riddlesExsampel";
import { useRef, useState } from "react";

export default function AddNewRiddle() {
  const navigate = useNavigate();
  const [message,SetMessage] = useState<string>()
  const FormRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = new FormData(FormRef.current!);
    const payload = {
      taskDescription: formdata.get("taskDescription"),
      correctAnswer: formdata.get("correctAnswer"),
      timelimit:formdata.get("timelimit"),
      difficulty:formdata.get("difficulty"),
      name:formdata.get("name"),
      id:formdata.get("id")
    };
    const res = await fetch("http://localhost:3002/riddles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "include",
    });
    if (res.ok) {
        SetMessage("riddle createted succesfuli")
        setTimeout(() => {
            navigate('/menu')
            
        }, 2000);
    } else {
      console.error("login faild");
    }
  };

  return (
    <>
      <div className="new-riddle">
        <h1>create new riddle</h1>
        <form ref={FormRef} onSubmit={onSubmit}>
          <label htmlFor="taskDescription">taskDescription</label>
          <input type="text" name="taskDescription" id="taskDescription" placeholder="taskDescription" required />
          <label htmlFor="correctAnswer">correctAnswer</label>
          <input type="text" name="correctAnswer" id="correctAnswer" placeholder="correctAnswer" required />
          <label htmlFor="timelimit">timelimit</label>
          <input type="number" name="timelimit" id="timelimit" placeholder="timelimit" required />
          <label htmlFor="difficulty">difficulty</label>
          <input type="text" name="difficulty" id="difficulty" placeholder="difficulty (easy/medum/hard)" required />
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" placeholder="name" />
          <label htmlFor="id">id</label>
          <input type="number" name="id" id="id" placeholder="id" />
          <button type="submit">send</button>
        </form>
        <p>{message}</p>
      </div>
    </>
  );
}
