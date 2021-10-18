import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaDev } from "react-icons/fa";

export const Nav = styled.nav`
  background: #00040d;
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 768px) {
    transition: ease 0.8s all;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #acb8bf;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 9px;
  padding: 0 1rem;

  &:hover {
    color: #e9ebed;
  }

  &.active {
    color: #e9ebed;
    border-bottom: 3px solid #2644ba;
  }
`;

export const NavIcon = styled(FaDev)`
  margin-right: 0.5rem;
  color: #2644ba;
  font-size: 2rem;
`;

export const MobileIcon = styled.div`
  display: none;
  color: #acb8bf;

  &:hover {
    color: #e9ebed;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
`;

export const NavLink = styled(Link)`
  color: #acb8bf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #e9ebed;
    transition: ease 0.3s all;
  }

  &.active {
    color: #e9ebed;
    border-bottom: 3px solid #2644ba;
  }
`;
