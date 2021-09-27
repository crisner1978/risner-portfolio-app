import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import ModalBox from "./components/modal/ModalBox";

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
    <div className="App">
      <Navbar openUp={openUp} />
      <Sidebar isOpen={isOpen} openUp={openUp} />
      <ModalBox showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about">
            <About handleShowModal={handleShowModal} />
          </Route>
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
