import { FaBars } from "react-icons/fa";
import SocialButtons from "../social/SocialButtons";
import useViewport from "../useViewport";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";

const Navbar = ({ openUp }) => {
  //breakpoint for SocialButtons go to Nav from Page
  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" exact >
          <NavIcon />
          CR
        </NavLogo>
        <MobileIcon onClick={openUp}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="/about" >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects" >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" >
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
