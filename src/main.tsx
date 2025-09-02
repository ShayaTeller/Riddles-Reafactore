import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Guest from "./pages/Guest.tsx";
import GameLoop from "./pages/GameLoop.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="guest" element={<Guest />} />
        <Route path="startgame" element={<GameLoop />} />
        <Route path="loadboard" element={<h1>not found</h1>} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
