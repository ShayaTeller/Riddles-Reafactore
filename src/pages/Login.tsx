import { useRef } from "react";
import { useNavigate } from "react-router";

export default function Login() {

  const navigate = useNavigate();
  const FormRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = new FormData(FormRef.current!);
    const payload = {
      username: formdata.get("username"),
      password: formdata.get("password"),
    };
    const res  = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "include",
    });
    if(res.ok){
        navigate('/menu')
    }
    else{
      console.error("login faild")
    }
  };

  return (
    <>
      <div className="login">
        <h1>login</h1>
        <form ref={FormRef} onSubmit={onSubmit}>
          <label htmlFor="username">user name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter yor name"
            required
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter your password"
            required
          />

          <button type="submit">login</button>
        </form>
      </div>
    </>
  );
}

