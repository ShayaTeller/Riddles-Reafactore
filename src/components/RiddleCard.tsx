import { useState } from "react";

export default function RiddleCard({
  description,
  answer,
  timelimit,
  name,
  setNextRiddle,
  answeringRiddles
}: {
  description: string;
  answer: string;
  timelimit: number;
  name: string;
  setNextRiddle:()=>void;
  answeringRiddles:()=>void
}) {

  const [playerAnswer, SetPlayerAnswer] = useState<string | null>(null);
  const [MessegeForClient, SetMessegeForClient] = useState<string | null>(null);

  return (
    <>
      <div className="riddle-card">
        <p>{description}</p>
        <input type="text" name="clientanswer" onChange={(e)=>{SetPlayerAnswer(e.target.value)}} />answer
        <input type="submit" onClick={()=>{
          if(playerAnswer!=answer){
            SetMessegeForClient("try agen")
          }
          if(playerAnswer==answer){
            SetMessegeForClient("good answer")
            setNextRiddle(true)
            answeringRiddles(description)
            return
          }
        }}/>
        <p>{MessegeForClient}</p>
        <p>{name}</p>
      </div>
    </>
  );
}
