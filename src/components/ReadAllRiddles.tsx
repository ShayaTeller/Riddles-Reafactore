import { useContext, useEffect, useState } from "react";
// import type { riddle } from "../utils/riddlesExsampel";
import { riddlesontext } from "../contexts/stroe";
import type { IRiddlesContext } from "../contexts/Riddles.context copy";
// import {questionsExampel} from '../utils/riddlesExsampel'
export default function ReadAllRiddles() {

  const {riddles, setRiddles} = useContext<IRiddlesContext>(riddlesontext);

  // const [riddles, SetRiddles] = useState<riddle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRiddles() {
      try {
        const res = await fetch("http://localhost:3002/riddles");
        if (!res.ok) throw new Error("Failed to fetch riddles");
        const data = await res.json();
        console.log(data)
        setRiddles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchRiddles();
  }, []);

  if (loading) return <p>טוען...</p>;

  return riddles.map((a) => {
    return (
      <>
        <div id="show-riddle" key={a.id}>
          <p>{a.name}</p>
          <p>{a.taskDescription}</p>
          <p>{a.correctAnswer}</p>
        </div>
      </>
    );
  });
}
