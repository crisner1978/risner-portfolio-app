import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  background-color: #e9ebed;
  max-width: 265px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  img {
    block-size: 12rem;
    width: 240px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

export const CardContent = styled(motion.div)`
  background-color: #00040d;
  margin: -.021rem 1rem;
  padding: 1rem;
  width: 240px;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #e9ebed;
  line-height: 1.3rem;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MenuLink = styled.a`
  color: #acb8bf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 0;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #e9ebed;
    transition: ease 0.3s all;
  }
`;