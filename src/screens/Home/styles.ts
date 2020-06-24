import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  background-color: #fff;
  max-width: 95%;
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0 6px 10px 0 #000;

  h2 {
    font-size: 22px;
    color: #392d2d;
    margin-bottom: 10px;
  }

  img.generatedImage {
    max-width: 95%;
  }
`;

export const Templates = styled.div`
  width: 100%;
  height: 90px;
  background-color: #eee;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;

  button {
    background: transparent;
    margin-right: 10px;
    border: 2px solid transparent;

    img {
      width: 100px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    padding: 0 15px;
    font-size: 14px;
    margin-bottom: 10px;
    color: #000;
  }

  img {
    max-width: 250px;
  }
  h3 {
    width: 100%;
    color: #000;
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 0;
  background-color: #4395d8;
  color: #fff;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    background: #3672a3;
  }
`;
