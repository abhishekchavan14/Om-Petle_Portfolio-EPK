import Contact from "./components/Contact";
import EPK from "./components/EPK";
import Home from "./components/Home";
import Music from "./components/Music";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <EPK />
      <Music />
      <Contact />
    </>
  );
}

export default App;
