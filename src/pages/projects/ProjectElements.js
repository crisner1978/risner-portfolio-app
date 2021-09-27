import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  background: -webkit-linear-gradient(
    to bottom right,
    black,
    #010d26 35%,
    #203a43 55%,
    #021133 70%
  );
  background: linear-gradient(
    to bottom right,
    black,
    #010d26 35%,
    #203a43 55%,
    #021133 70%
  );
  height: 100%;
  width: 100%;
  padding: 8rem 0 4rem 0;
  margin: 0;
  overflow-x: hidden;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2.2rem;
  height: 100%;
  width: 100%;
  align-content: center;
  justify-content: center;
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

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
