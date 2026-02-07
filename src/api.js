import axios from "axios";
// import { config } from "dotenv";

const api =  axios.create({
  //  baseURL: "http://localhost:5000",
   baseURL: "https://frontend-and-backend-green.vercel.app",
})

api.interceptors.request.use((req) =>{
  const token = localStorage.getItem("token");

   if(token){
     req.headers["x-auth-token"] = token;

   }
   return req;
})

export default api;