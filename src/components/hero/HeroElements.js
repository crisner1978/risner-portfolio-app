import styled from "styled-components";
import BgImg from "../../assets/images/bg-img.jpg";
import { motion } from "framer-motion";

export const Section = styled.section`
  background-image: url(${BgImg});
  margin: 0;
  padding: 10rem 0;
  height: 100vh;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto auto;
  margin-top: 3rem;
  align-items: center;
  justify-content: flex-start;
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

export const Left = styled.div`
  margin-left: 200px;
  transition: ease-out 0.5s all;

  @media only screen and (min-height: 1200px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    transition: ease-out 0.4s all;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 480px) {
    padding-top: auto;
    margin-bottom: auto;
  }
`;

export const TitleContainer = styled.div`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Info = styled(motion.div)`
  font-family: "Roboto Mono";
  font-weight: 400;
  max-width: 401px;
  font-size: 1.3rem;
  color: #e9ebed;
  line-height: 1.75rem;
  margin-top: 1rem;
  padding: 1.2rem 1.2rem;
  background-color: #00040d;
  transition: ease-out 0.4s all;

  .pro {
    display: block;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    text-align: left;
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
