import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Hero from "./pages/hero/Hero";
import ModalBox from "./components/modal/ModalBox";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";

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
      <Sidebar isOpen={isOpen} openUp={openUp} />
      <ModalBox showModal={showModal} setShowModal={setShowModal} />
        <Switch location={location} key={location.pathname}>
          <div className="app__main">
            <Route path="/" exact component={Hero} />
            <Route path="/about">
              <About handleShowModal={handleShowModal} />
            </Route>
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </Switch>
    </div>
  );
}

export default App;
