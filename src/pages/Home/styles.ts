import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme === 'pomodoro' ? '#DB524D' : '#468491'};
  transition: all 3s;
`;

export const Wrapper = styled.div`

`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px 60px;
  margin-bottom: 50px;
`;