import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const ModalContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  max-width: auto;
  height: max-content;
  background: #acb8bf;
  color: #00040d;
  display: grid;
  position: relative;
  overflow-y: hidden;
  z-index: 20;
  border-radius: 10px;
  box-shadow: 0 0 50px 15px rgba(0, 0, 0, 0.8);

  * {
    font-family: "Roboto Mono";
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 25;
  color: #e9ebed;

  &:hover {
    color: #00040d;
  }
`;

export const TopBox = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2rem;
  padding: 1rem;

  h2 {
    font-family: "Montserrat";
    color: #203a43;
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    font-size: 1rem;
  }

  li {
    background: #203a43;
    color: #e9ebed;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 2rem;
    font-style: bolder;
  }
`;

export const BottomBox = styled(TopBox)`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 390px;
  }
`;
