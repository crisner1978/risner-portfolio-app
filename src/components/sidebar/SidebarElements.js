import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #00040d;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: ease-in-out 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #acb8bf;

  &:hover {
    color: #e9ebed;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #e9ebed;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #acb8bf;
  cursor: pointer;

  &:hover {
    color: #e9ebed;
    transition: ease-in-out 0.3s all;
    border-bottom: 3px solid #2644ba;
  }
`;

//not using it was for another mobile bar
// export const SideButton = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export const SidebarRoute = styled(Link)`
//   border-radius: 5px;
//   background: #36e009;
//   white-space: nowrap;
//   padding: 16px 64px;
//   color: #010606;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: 0.3s all ease-in-out;
//   text-decoration: none;
//   font-weight: bolder;

//   &:hover {
//     transition: ease-in-out 0.3s all;
//     background: #fff;
//     color: #010606;
//   }
// `;
