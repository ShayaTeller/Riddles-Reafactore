import { useState, type SetStateAction } from "react";
import { riddlesontext } from "./stroe";
import type { riddle } from "../utils/riddlesExsampel";
export type IRiddlesContext = {
    riddles: riddle[];
    setRiddles: React.Dispatch<SetStateAction<riddle[]>>
}



export default function RiddlesContext({ children }:{children: React.ReactNode}) {
  const [riddles, setRiddles] = useState<riddle[]>();

  return (
    <riddlesontext.Provider value={{ riddles, setRiddles }}>
      {children}
    </riddlesontext.Provider>
  );
}
