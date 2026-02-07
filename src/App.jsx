import { Routes, Route , Navigate } from "react-router-dom";
import Login from './Pages/Login'
import Register from './Pages/Register'
import ProtectedRoute from './Component/ProtectedRoute'
import Dashboard from './Component/Dashedboard'
import Header from './Component/Header'

import './App.css'


function App() {
  
  return (
    <>
      <Header />
      <div className="app-root">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute /> }>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
