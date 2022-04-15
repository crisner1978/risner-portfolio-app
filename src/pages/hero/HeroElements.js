import styled from "styled-components";
import BgImg from "../../assets/images/header-background.jpg"
import { motion } from "framer-motion";

export const Section = styled.section`
  background-image: url(${BgImg});
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto auto;
  
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 3;

  @media only screen and (max-width: 768px) {
    margin-top: -1rem;
    flex-direction: column;
    height: 100vh;
  }

  @media only screen and (max-width: 480px) {
    margin-top: auto;
    margin-bottom: auto;
    height: 100vh;
  }
`;


export const TitleContainer = styled.div`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Info = styled(motion.div)`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  color: #e9ebed;
  line-height: 1.75rem;
  
  padding: 20px 0;
  transition: ease-out 0.4s all;

  .pro {
    font-family: "Roboto Mono";
    font-size: 19px;
    letter-spacing: -1px;
    color: #A8A8A8;
    margin: 0 auto;
    width: 100%;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
  }
  span {
    color: #fff;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 375px;
    padding-right: auto;
    padding-left: auto;
    margin-right: auto;
    margin-left: auto;
  }
  @media only screen and (max-width: 480px) {
    max-width: 315px;
    width: 90%;
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  margin-top: -18px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    transition: ease-out 0.4s all;
    padding-top: 2rem;
  }
`;
