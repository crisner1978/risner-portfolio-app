import { Suspense, useState, lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
const ModalBox = lazy(() => import("./components/modal/ModalBox"));
const Sidebar = lazy(() => import("./components/sidebar/Sidebar"));

function App() {
  const location = useLocation();

  //for Modal
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  //for NAV/Sidebar
  const [isOpen, setIsOpen] = useState(false);
  const openUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <Navbar openUp={openUp} />
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar isOpen={isOpen} openUp={openUp} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ModalBox showModal={showModal} setShowModal={setShowModal} />
      </Suspense>

      <div className="app__main">

        <Hero handleShowModal={handleShowModal} />
        <About handleShowModal={handleShowModal} />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}

export default App;
