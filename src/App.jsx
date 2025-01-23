import { useRef } from "react";
import Contact from "./components/Contact";
import EPK from "./components/EPK";
import Home from "./components/Home";
import Music from "./components/Music";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const targetSectionRef = useRef(null);
  return (
    <>
      <Navbar />
      <Home targetSectionRef={targetSectionRef} />
      <EPK />
      <Music targetSectionRef={targetSectionRef}/>
      <Contact />
    </>
  );
}

export default App;
