import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  display: flex;
  font-family: "Roboto Mono";
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
  width: 300px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #acb8bf;
  cursor: pointer;
  transition: 0.3s ease-out all;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177/ 12%);
  font-weight: bold;
  background: ${({ primary }) => (primary ? "transparent" : "#1C3187")};
  border: #1c3187 3px solid;

  &:hover {
    color: #e9ebed;
    transition: ease-in 0.3s all;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
  }

  @media screen and (max-width: 768px) {
    width: 270px;
  }
`;
