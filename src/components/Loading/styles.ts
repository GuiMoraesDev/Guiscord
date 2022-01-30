import styled from 'styled-components';

export const LoadingComponent = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  margin: auto;

  > img {
    width: 100%;
    height: 100%;
  }

  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
