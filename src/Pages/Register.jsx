
 import {useState} from "react";
 import { useNavigate } from "react-router-dom";

 import api from "../api";

  function Register(){

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    
    const navigate = useNavigate(); // hook for redirect

    const handleRegister = async (e)=>{
      e.preventDefault();
       console.log("Submit clicked");

       try {
       const result =   await api.post("/api/v1/user/register", {username ,email, password})
       console.log(result);
          alert("Register is Successfully")
          

         
            //  alert(res.data.message);

    // if (res.data.redirect === "login") {
      navigate("/login");
    // } else {
    //   navigate("/login"); // new user bhi login kare
    // }
        
          //  navigate("/register")
       } catch (error) {
           alert(error.response.data.message)
       }
    };

    return(
      <form className="log1" onSubmit={handleRegister}>
         <div className="log">
        <h2>Register</h2>
        <label className="lab" htmlFor="">Username</label>
       <input className="inp" placeholder="username" onChange={e=>setUsername(e.target.value)} />
         <br />
         <br />
        <label className="lab" htmlFor="">Email</label>
       <input className="inp" type="email" placeholder="email" onChange={e=>setEmail(e.target.value)} />
       <br />
       <br />
        <label className="lab" htmlFor="">Password</label>
       <input className="inp" type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
       <br />
         <button className="inp" type="submit">Register</button>
         </div>
      
      </form>
    )

  }

  export default Register;