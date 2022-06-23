import { motion } from "framer-motion";
import styled from "styled-components";

export const SocialMenu = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const SocialIcons = styled.a`
  background: transparent;
  color: #acb8bf;
  white-space: nowrap;
  padding: 10px 10px;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  font-weight: bolder;

  &:hover {
    transform: scale(1.3) rotate(360deg);
    transition: ease-in-out 0.4s all;
    color: #e9ebed;
  }
`;
