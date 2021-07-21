import styled from 'styled-components';

export const Container = styled.div`
  h3 {
      color: #fff;
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: bold;

      span {
        font-weight: 300;
        display: block;
        font-size: 16px;
        margin-top: 10px;
      }
  }

  audio {
    width: 100%;
  }
`;

export const ButtonsControlContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    margin: 0 10px;
    padding: 4px 8px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
`;