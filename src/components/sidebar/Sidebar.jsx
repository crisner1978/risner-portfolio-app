import SocialButtons from "../social/SocialButtons";
import {
  Container,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, openUp }) => {
  return (
    <Container isOpen={isOpen} onClick={openUp}>
      <Icon>
        <CloseIcon onClick={openUp} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/projects">Projects</SidebarLink>
          <SidebarLink to="/contact">Contact</SidebarLink>
        </SidebarMenu>
        <SocialButtons />
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
