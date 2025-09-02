import { useState } from 'react';
import RiddleCard from '../components/RiddleCard'
import {questionsExampel}  from '../utils/riddlesExsampel'
export default function GameLoop() {

    const [corecctAnswer,SetCorrectAnswer] = useState<boolean>(false)
    const nextriddle = (s:boolean)=>SetCorrectAnswer(s);

  
    console.log(corecctAnswer)
    
    const questions = questionsExampel;

const i = 0
const q = questions[i]

  return (
    <>
    <h1>hello</h1>
     <RiddleCard description={q.description} answer={q.answer} name={q.name} setNextRiddle={nextriddle}/>
    </>
  );}
