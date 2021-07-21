import styled from 'styled-components';

export const Container = styled.div`
  div {
      display: flex;

      h2 {
        margin: 0 15px;
        font-size: 30px;
        color: #fff;
        padding: 5px;
        border-radius: 3px;
        cursor: pointer;

        &.active {
          font-weight: bold;
          background: none rgba(0, 0, 0, 0.15);
        }
      }
  }
`;
