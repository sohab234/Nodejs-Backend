// import api from "../api";
// import TodoList from "./TodoList";
// import { useEffect, useState } from "react";

// function Dashboard() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await api.get("/api/v1/user", {
//           headers: {
//             "x-auth-token": localStorage.getItem("token"),
//           },
//         });

//         console.log("API user master:" , res.data);

//         setUser(res.data.data);
//         // optional: cache user
//         localStorage.setItem("user", JSON.stringify(res.data.data));
//       } catch (error) {
//         console.log(
//           "Dashboard error:",
//           error.response?.data || error.message
//         );
//       }
//     };

//     fetchUser();
//   }, []);

//   if (!user) {
//     return <p style={{ padding: 20 }}>Loading user data...</p>;
//   }

//   return (
//     <div style={{ maxWidth: 480, margin: "24px auto", padding: 20, borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.06)", fontFamily: "sans-serif", position: "relative" }}>
//       <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 8 }}>
//         <button
//           onClick={() => {
//             localStorage.removeItem("token");
//             localStorage.removeItem("user");
//             window.location.href = "/login";
//           }}
//           style={{ padding: "8px 12px", background: "#ef4444", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}
//         >
//           Logout
//         </button>
//         <a href="/register" style={{ alignSelf: "center", color: "#2563eb", textDecoration: "none" }}>Register</a>
//       </div>

//       <h2 style={{ margin: "0 0 12px" }}>Dashboard</h2>

//       <div style={{ marginBottom: 8 }}>
//         <strong>Username:</strong> {user.username}
//       </div>

//       <div style={{ marginBottom: 12 }}>
//         <strong>Email:</strong> {user.email}
//       </div>

//       <p style={{ color: "#b91c1c", marginBottom: 12 }}>
//         Password security reasons ki wajah se show nahi hota
//       </p>

//       <TodoList />
//     </div>
//   );
// }




import TodoList from "./TodoList";
// import api from "../api";
export default function Dashboard() {
  return (
    <div>
      <h2 style={{textAlign: "center" ,fontFamily: "sans-serif"}}>Dashboard</h2>
      <TodoList />
    </div>
  );
}

// export default Dashboard;