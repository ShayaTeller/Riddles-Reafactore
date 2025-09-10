import { useLocation } from "react-router";
import { useContext, useState } from "react";
import type { IRiddlesContext } from "../contexts/Riddles.context copy";
import { riddlesontext } from "../contexts/stroe";
export default function GameLoop() {
  const { state } = useLocation() as {
    state?: { from?: string; diff?: string };
  };
  const { riddles } = useContext<IRiddlesContext>(riddlesontext);
  const diff = state.diff;
  console.log(`diff; ${diff}`);
  // console.log(`riddles; ${riddles}`)
  console.log(`state: ${JSON.stringify(state)}`);

const [index, setIndex] = useState(0);
const [answer, setAnswer] = useState("");
const [inputValue, setInputValue] = useState("");
const [message,setMessage] = useState("")
  for (index; index < riddles.length; ) {
    const element = riddles[index]
    if (element.correctAnswer == null || element.correctAnswer === undefined) {
      setIndex(index + 1);
    }
    if (answer === element.correctAnswer) {
      setIndex(index + 1);
      setMessage("good:)")
    }
    else{
      setMessage("wrong anser try agein(:")
    }
    return (
      <>
        <h1>{state.diff}</h1>
        <div key={index}>
          <p>{element.taskDescription}</p>
          <p>{element.name}</p>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              setAnswer(inputValue);
            }}
          >
            <label htmlFor="input">answer</label>
            <input
              type="text"
              name="input"
              id="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <p>{message}</p>
            <button>send</button>
          </form>
        </div>
      </>
    );
  }
}
