import { Outlet } from "react-router";

export default function HomePage() {
  return (
    <>
    
      <h1>welcome to the riddle game HomePage</h1>
      <a href="/signin">login</a>
      <a href="/signup">singUp</a>
      <a href="/guest">Guost</a>
     
      <Outlet />
    </>
  );
}
