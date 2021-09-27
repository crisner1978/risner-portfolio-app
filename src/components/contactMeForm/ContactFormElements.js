import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 100%;
  text-align: left;
  .form-group {
    width: 100%;
    /* margin-bottom: 1rem; */
    color: #e9ebed;
  }

  label {
    display: flex;
    font-size: 1rem;
  }

  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1.15rem;
    color: #e9ebed;
    background-color: #00040d;
    outline: none;
    border: none;
    border-radius: 10px;
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  
`;

export const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  margin-top: -1.5rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
