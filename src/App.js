import Home from "./Pages/home/Home";
import Profile from "./Pages/profile/Profile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/register/register";
import React from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import './App.css';
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return  (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user? <Home/> : <Register/>}/>
        <Route path="/register" element={user? <Navigate to="/"/> : <Register/>}/>
        <Route path="/login" element={user? <Navigate to="/"/> : <Login/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    {/* <div className="pages">
    </div> */}
    </BrowserRouter>
    )
}
export default App;
