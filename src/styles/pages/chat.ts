import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary[500]};
  background-image: url('https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
`;

export const Content = styled.div`
  position: relative;

  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100%;
  max-width: 95%;
  max-height: 95vh;

  border-radius: 5px;

  padding: ${({ theme }) => theme.spaces.x8};
  margin: ${({ theme }) => theme.spaces.x4};

  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);

  background-color: ${({ theme }) => theme.colors.neutrals[700]};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${({ theme }) => theme.spaces.x16};
`;

export const ChatWrapper = styled.div`
  position: relative;

  display: flex;

  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 80%;

  border-radius: 5px;

  padding: ${({ theme }) => theme.spaces.x4};

  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);

  background-color: ${({ theme }) => theme.colors.neutrals[600]};
`;

export const ChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: ${({ theme }) => theme.spaces.x16};

  color: ${({ theme }) => theme.colors.neutrals[100]};
  background-color: ${({ theme }) => theme.colors.neutrals[700]};

  padding: ${({ theme }) => theme.spaces.x2};
  margin: ${({ theme }) => theme.spaces.x1} 0;

  border-radius: ${({ theme }) => theme.rounded.sm};

  > header {
    display: flex;
    align-items: center;

    height: 50%;

    > img {
      height: 100%;

      border-radius: 50%;
    }

    > strong {
      font-size: ${({ theme }) => theme.spaces.x4};
      font-weight: 600;

      margin-left: ${({ theme }) => theme.spaces.x2};
    }
  }

  > p {
    font-size: ${({ theme }) => theme.spaces.x3};
  }
`;

export const UserInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
