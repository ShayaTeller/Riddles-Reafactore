import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <>
    <div className="homepage">

      <div className="h1-homepage">
        <h1 >welcome to the riddle game HomePage</h1>
      </div>
      <NavBar/>
    </div>
      <Outlet />
    </>
  );
}
