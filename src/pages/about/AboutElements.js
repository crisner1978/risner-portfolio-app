import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  /* position: relative; */
  padding: 4rem;
  margin: 0;
  background: #2B2B2B;
  padding-top: 96px;
  padding-bottom: 66px;
  overflow: hidden;

  .container {
    display: flex;
    max-width: 1200px;
    margin: auto auto;
    /* margin-top: 2rem; */
    align-items: center;
    justify-content: space-evenly;
    width: 95%;
    text-align: left;
    gap: 2rem;
  }
  .right {
      max-width: 300px;
      max-height: 300px;
      background-color: #e9ebed;
      padding: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: -10px 10px 10px #00040d;
      border-radius: 50%;
    }

  .section-title {
    text-align: left;
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
    padding-top: 8rem;
    .container {
      height: 100%;
      flex-direction: column;
      text-align: center;
      /* padding-bottom: 10rem; */
      
    }
    .left,
    .left {
      margin-top: 1rem;
    }
    
    .section-title {
      text-align: left;
    }
  }
`;

export const AboutDesc = styled(motion.div)`
  font-family: "Roboto Mono";
  color: #7A7A7A;
  text-align: left;
  max-width: 600px;
  font-size: 15px;
  
  line-height: 30px;
  margin-top: 1rem;
  /* margin-left: 0; */
  padding: 0;
  @media only screen and (max-width: 768px) {
    width: 90%;
    max-width: 460px;
    text-align: left;
    font-size: 1.3rem;
    margin-right: auto;
    margin-left: auto;
  }
  /* @media only screen and (max-width: 768px){
    font-size: 1.2rem;
    margin-right: auto;
    margin-left: auto;
  } */
  @media only screen and (max-width: 480px) {
    max-width: 400px;
    width: 90%;
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: -18px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
