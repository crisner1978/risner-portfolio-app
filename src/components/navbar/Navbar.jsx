import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import SocialButtons from "../social/SocialButtons";
import useViewport from "../useViewport";
import {
  MobileIcon, Nav,
  NavbarContainer, NavIcon, NavItem,
  NavLink, NavLogo, NavMenu
} from "./NavbarElements";

const Navbar = ({ openUp }) => {
  //breakpoint for SocialButtons go to Nav from Page
  const { width } = useViewport();
  const breakpoint = 768;

  const [showNav, setShowNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav showNav={showNav}>
      <NavbarContainer>
        <NavLogo
          to="/"
          onClick={toggleHome}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
        >
          <NavIcon />
          CR
        </NavLogo>
        <MobileIcon onClick={openUp}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about" 
            smooth={true} duration={500} spy={true} exact="true" offset={-70}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
        {width > breakpoint && <SocialButtons />}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
