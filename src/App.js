import { lazy, Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Hero from "./pages/hero/Hero";
import Projects from "./pages/projects/Projects";
const ModalBox = lazy(() => import("./components/modal/ModalBox"));
const Sidebar = lazy(() => import("./components/sidebar/Sidebar"));

function App() {

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
        <Hero />
        <About handleShowModal={handleShowModal} />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}

export default App;
