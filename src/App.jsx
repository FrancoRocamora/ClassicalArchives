import "./App.css";
//import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Landing from "./views/landing/Landing.jsx";
//import { useDispatch, useSelector } from "react-redux";
//import { useEffect } from "react";

function App() {
  //const locationNow = useLocation();
  //const dispatch = useDispatch();
  //const navigate = useNavigate();

  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;