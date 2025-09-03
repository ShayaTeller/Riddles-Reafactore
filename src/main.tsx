import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Guest from "./pages/Guest.tsx";
import Menu from "./pages/Menu.tsx";
import ReadAllRiddles from "./components/ReadAllRiddles.tsx";
import AddNewRiddle from "./components/NewRiddle.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="guest" element={<Guest />} />
        <Route path="loadboard" element={<h1>not found</h1>} />
        <Route path="menu" element={<Menu/>}/>
        <Route path="readriddles" element={<ReadAllRiddles/>}/>
        <Route path="newriddle" element={<AddNewRiddle/>}/>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
