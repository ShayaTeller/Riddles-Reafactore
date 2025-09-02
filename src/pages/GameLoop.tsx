import { useState } from 'react';
import RiddleCard from '../components/RiddleCard'
export default function GameLoop() {
    const [corecctAnswer,SetCorrectAnswer] = useState<boolean>(false)
    const nextriddle = (s:boolean)=>SetCorrectAnswer(s);
    const [answeringRiddels,SetansweringRiddles] = useState([])
    const asweringRiddles = (a)=>SetansweringRiddles(a)
    if(corecctAnswer){
        return
    }
    
    
    const questions = [
  {
    description: "5+5?",
    answer: "10",
    timelimit: 1,
    name: "math"
  },
  {
    description: "8-3?",
    answer: "5",
    timelimit: 1,
    name: "math"
  },
  {
    description: "6*2?",
    answer: "12",
    timelimit: 1,
    name: "math"
  }
];

const i = Math.floor(Math.random() * questions.length)
const q = questions[i]
  return (
    <>
    <h1>hello</h1>
     <RiddleCard description={q.description} answer={q.answer} timelimit={q.timelimit} name={q.name} setNextRiddle={nextriddle} answeringRiddles={asweringRiddles}/>
    </>
  );}
