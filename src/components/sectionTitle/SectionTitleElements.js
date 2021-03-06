import styled from "styled-components";

export const TitleWrapper = styled.div`
  color: #E9EBED;

  p {
    font-family: "Roboto Mono";
    font-size: 1.5rem;
  }

  h2 {
    font-family: "Montserrat";
    font-weight:  ${({ hero }) => (hero ? '600' : "400")};
    font-size: ${({ hero }) => (hero ? "90px" : "3.5rem")} ;
    margin-top: 0.5rem;
    text-transform: ${({ upper }) => (upper ? "uppercase" : null)};
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }

    h2 {
      font-size: ${({ hero }) => (hero ? "3.5rem" : "2.5rem")};
    }
  }
`;
