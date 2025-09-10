import { useState, type SetStateAction } from "react";
import { rolecontext } from "./stroe";

export type IRoleContext = {
    role: string;
    setRole: React.Dispatch<SetStateAction<string>>
}



export default function RoleContext({ children }:{children: React.ReactNode}) {
  const [role, setRole] = useState<string>("");

  return (
    <rolecontext.Provider value={{ role, setRole }}>
      {children}
    </rolecontext.Provider>
  );
}
