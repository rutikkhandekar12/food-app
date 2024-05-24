import Body from "./src/pages/home/body/Body";
import Footer from "./src/pages/home/footer/Footer";
import Header from "./src/pages/home/header/Header";
import "./App.css";
import { Login } from "./src/pages/authentication/Login";
import Shimmer from "./src/components/shimmer-effect/Shimmer";
import { Outlet } from "react-router-dom";
import Menu from "./src/components/menu/Menu";

const App = () => {
  return (
    <div className="App">
      <Menu/>
    </div>
  );
};

export default App;
