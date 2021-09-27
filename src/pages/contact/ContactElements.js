import styled from "styled-components";


export const Background = styled.div`
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
  padding: 8rem 0;

  .container {
    /* display: flex; */
    max-width: 1200px;
    /* max-height: 1000px; */
    margin: 0 auto;
    /* margin-top: 1rem; */
    /* align-items: center; */
    /* justify-content: space-evenly; */
    width: 95%;
    height: 100%;
    text-align: center;
    gap: 4rem;
  }


  .content {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
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

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    transition: ease-out 0.4s all;
    padding-top: 2rem;
  }
`;

