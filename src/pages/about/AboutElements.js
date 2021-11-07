import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  /* position: relative; */
  padding: 8rem 0 4rem 0;
  margin: 0;
  height: 100%;
  width: 100%;
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
  

  .container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 2rem;
    align-items: center;
    justify-content: space-evenly;
    width: 95%;
    min-height: 100%;
    text-align: left;
    gap: 2rem;
    padding-bottom: 4rem;
  }
  .right {
      max-width: 300px;
      max-height: 300px;
      background-color: #e9ebed;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: -10px 10px 10px #00040d;
    }

  .left {
    margin-top: 3rem;
  }

  .section-title {
    text-align: left;
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
    .container {
      height: 100%;
      flex-direction: column;
      text-align: center;
      padding-bottom: 12rem;
      
    }
    .left,
    .right {
      width: 100%;
      
    }
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
  color: #e9ebed;
  text-align: left;
  max-width: 500px;
  font-size: 1.3rem;
  line-height: 1.75rem;
  margin-top: 1rem;
  /* margin-left: 0; */
  padding: 1.2rem 1.2rem;
  background-color: #00040d;
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
  justify-content: flex-end;
  margin-top: -18px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
