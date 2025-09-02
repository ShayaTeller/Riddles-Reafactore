import { useNavigate } from "react-router";
export default function SignUp() {

  const navigate = useNavigate();

  return (
    <>
       <div>
    <h1>sign Up</h1>
    <form action="">
      <label htmlFor="username"></label>
      <input type="text" name="username" placeholder="enter yor name" />user name
      <label htmlFor="email"></label>
      <input type="email" name="email" id="" />email
      <label htmlFor="password"></label>
      <input type="password" name="password" id="" placeholder="enter your password" />password
      <input type="submit" name="" id="" onClick={()=>{
        navigate('/signin')
      }} />sing up
    </form>
    </div>
   
      
    </>
  );
}