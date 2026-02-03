
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api"



export default function Login() {


  // const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    //  console.log(handleLogin);


    try {
      const res = await api.post("/api/v1/user/login", { username, password })
       console.log(res.data);
       
      localStorage.setItem("token", res.data.Token)
      alert("Login Successfully")
      navigate("/dashboard")
      // navigate("/login")
    } catch (error) {
      alert(error.response.data.message || "Login failed")
    }
  };

  return (
    <form className="log1" onSubmit={handleLogin}>
      <div className="log">

        <h2>Login</h2>
        <h3>Enter your login credential</h3>
        <label className="lab" htmlFor="">Username</label>
        <input className="inp" placeholder="username" onChange={e => setUsername(e.target.value)} />
        <br />
        <br />
        <label className="lab" htmlFor="">Password</label>
        <input className="inp" type="password" placeholder="password" onChange={e => setPassword(e.
          target.value)} />
        <br />
        <br />
        <button className="inp" type="submit">Login</button>
        <div className="anchor">
          <a href="/register">not Register ? <span>Create an account</span></a>
        </div>
      </div>
    </form>
  )

}