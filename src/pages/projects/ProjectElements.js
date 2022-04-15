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
  padding: 4rem 0 4rem 0;
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
