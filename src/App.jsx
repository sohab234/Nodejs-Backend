import { Routes, Route , Navigate } from "react-router-dom";
import Login from './Pages/Login'
import Register from './Pages/Register'
import ProtectedRoute from './Component/ProtectedRoute'
import Dashboard from './Component/Dashedboard'

import './App.css'


function App() {
  
  return (
  
     <Routes>
       <Route path="/" element={<Navigate to="/login" />} />
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
     <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
     </Routes>
  )
}

export default App
