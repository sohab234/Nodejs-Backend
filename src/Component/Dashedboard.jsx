// import { json } from "express"
import api from "../api"
import { useEffect, useState } from "react"



function Dashboard() {

  const [user, setUser] = useState(null)

  useEffect(() => {

  //    const fetchUser = async () => {
  //   const res = await api.get("/api/v1/user");
  //   setUser(res.data.data);
  // };

  // fetchUser();

    // component mount hone par data load
    const storeUser = localStorage.getItem("user")
    console.log(storeUser);
    

    if (storeUser) {
      setUser(JSON.parse(storeUser))
    }


  }, []) //empty dependency siruf ek bar chalege

  if (!user) {
    return <p>Loading user data...</p>
  }

  return (
    <div className="" style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>
        <b>username:</b> {user.username}
      </p>

      <p>
        <b>Email:</b> {user.email}
      </p>

       <p style={{ color: "red" }}>
        Password security reasons ki wajah se show nahi hota 
      </p>
    </div>
  );
}

export default Dashboard; 