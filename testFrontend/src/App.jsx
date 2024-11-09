import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Assets from "./assets/assets";
import NavBar from "./components/NavBar";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div
        className={`${
          isMenuOpen ? "mr-[120px]" : "ml-0"
        } transition-all duration-300 ease-in-out p-6`}
      >
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sequi
          totam, quisquam eveniet magni sint similique cumque inventore et nobis
          eaque fugiat aut vitae eligendi laborum, dolorem exercitationem harum
          odio!
        </div>
      </div>
    </>
  );
}

export default App;
