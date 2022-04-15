import styled from "styled-components";


export const Background = styled.section`
background: #191919;
color: #636363;
padding-top: 96px;
padding-bottom: 96px;

  .container {
    display: flex;
    max-width: 1200px;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 1rem;
    width: 100%;
    text-align: center;
  }


  .content {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
    padding-bottom: 2rem;
    justify-content: space-evenly;
    position: relative;

    @media only screen and (max-width: 768px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  //line in middle of form
  .content::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 77%;
    background-color: #e9ebed;
    left: 50%;
    top: 39.5%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 768px){
      display: none;
    }
  }
  .left {
    width: 100%;
    max-width: 400px;
  }
  .right {
    width: 100%;
    max-width: 400px;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 8rem;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    transition: ease-out 0.4s all;
    padding-top: 2rem;
  }
`;


