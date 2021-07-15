import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/auth/signup";
import SignIn from "./components/auth/signin";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  var landingPage = isAuthenticated ? <Home /> : <SignIn />;
  return <div className="App">{landingPage}</div>;
}

export default App;
