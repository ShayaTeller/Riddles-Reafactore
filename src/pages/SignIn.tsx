import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <>
    <div>
       <h1>Sign In</h1>
    <form action="">
      <label htmlFor="username"></label>
      <input type="text" name="username" placeholder="enter yor name" />user name
      <label htmlFor="password"></label>
      <input type="password" name="password" id="" placeholder="enter your password" />password
      <input type="submit" name="" id="" onClick={()=>{
        navigate('/menu')
      }} />sing in
    </form>
    </div>
   
      
    </>
  );
}