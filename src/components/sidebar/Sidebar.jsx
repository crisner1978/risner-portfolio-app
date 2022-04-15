import SocialButtons from "../social/SocialButtons";
import { animateScroll as scroll } from "react-scroll";
import {
  Container,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, openUp }) => {
  const toggleHome = () => {
    openUp();
    scroll.scrollToTop();
  };
  return (
    <Container isOpen={isOpen} onClick={openUp}>
      <Icon>
        <CloseIcon onClick={openUp} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="/"
            onClick={toggleHome}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Home
          </SidebarLink>
          <SidebarLink
            onClick={openUp}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            About
          </SidebarLink>
          <SidebarLink
            onClick={openUp}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            onClick={openUp}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SocialButtons />
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
