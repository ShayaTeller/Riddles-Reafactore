import { createContext } from "react";
import type { IUserContext } from "./User.context";
import type {IRoleContext} from './Role.context'
import type { IRiddlesContext } from "./Riddles.context copy";
export const context = createContext<IUserContext>({user: "", setUser: () => {}});
export const rolecontext = createContext<IRoleContext>({role: "", setRole: () => {}});
export const riddlesontext = createContext<IRiddlesContext>({riddles:[], setRiddles: () => {}});