import styled, { css } from 'styled-components';

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

  display: grid;

  grid-template-columns: 200px 1fr;
  grid-template-rows: ${({ theme }) => theme.spaces.x16} 1fr ${({ theme }) =>
      theme.spaces.x16};
  grid-template-areas:
    'Sidebar Header'
    'Sidebar Chat'
    'Sidebar UserInput';

  grid-gap: ${({ theme }) => theme.spaces.x4};

  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100%;
  max-width: 95%;
  max-height: 95vh;

  border-radius: 5px;

  padding: ${({ theme }) => theme.spaces.x4};
  margin: ${({ theme }) => theme.spaces.x4};

  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);

  background-color: ${({ theme }) => theme.colors.neutrals[700]};
`;

export const Header = styled.header`
  grid-area: Header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${({ theme }) => theme.spaces.x16};
`;

export const ChatWrapper = styled.div`
  grid-area: Chat;

  position: relative;

  display: flex;

  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100%;

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

  color: ${({ theme }) => theme.colors.neutrals[100]};
  background-color: ${({ theme }) => theme.colors.neutrals[700]};

  padding: ${({ theme }) => theme.spaces.x2};
  margin: ${({ theme }) => theme.spaces.x1} 0;

  border-radius: ${({ theme }) => theme.rounded.sm};

  > header {
    position: relative;

    display: flex;
    align-items: center;

    height: ${({ theme }) => theme.spaces.x16};

    > img {
      height: 60%;

      border-radius: 50%;
    }

    > strong {
      font-size: ${({ theme }) => theme.spaces.x4};
      font-weight: 600;

      margin-left: ${({ theme }) => theme.spaces.x2};
    }

    > .removeMessage {
      position: absolute;

      top: 0;
      right: 0;
    }
  }

  > p {
    font-size: ${({ theme }) => theme.spaces.x3};

    > img {
      width: ${({ theme }) => theme.spaces.x16};
      height: ${({ theme }) => theme.spaces.x16};

      margin-left: ${({ theme }) => theme.spaces.x4};
    }
  }
`;

export const Sidebar = styled.aside`
  grid-area: Sidebar;

  width: 100%;
  height: 100%;

  overflow-y: auto;

  margin-right: ${({ theme }) => theme.spaces.x4};
  padding: 0 ${({ theme }) => theme.spaces.x4};
`;

interface IFollowingCardProps {
  selected: boolean;
}

export const FollowingCard = styled.div<IFollowingCardProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.spaces.x16};

  color: ${({ theme }) => theme.colors.neutrals[100]};
  background-color: ${({ theme }) => theme.colors.neutrals[600]};

  padding: ${({ theme }) => theme.spaces.x2};

  border-radius: ${({ theme }) => theme.rounded.sm};

  overflow: hidden;

  transition: border ${({ theme }) => theme.transition.slow};

  :not(:first-of-type, :last-of-type) {
    margin: ${({ theme }) => theme.spaces.x2} 0;
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      border: 1px solid ${theme.colors.alert.success};
    `}

  > img {
    width: 24px;
    height: 24px;

    border-radius: 50%;
  }

  > strong {
    font-size: ${({ theme }) => theme.spaces.x4};
    font-weight: 600;

    margin-left: ${({ theme }) => theme.spaces.x2};

    word-break: break-all;
  }
`;

export const EmptyFollowing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-gap: ${({ theme }) => theme.spaces.x4};

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.neutrals[100]};

  > img {
    width: 24px;
    height: 24px;

    border-radius: 50%;
  }

  > strong {
    font-size: ${({ theme }) => theme.spaces.x4};
    font-weight: 600;
  }
`;

export const EmptyMessages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-gap: ${({ theme }) => theme.spaces.x4};

  width: 40%;
  height: 40%;

  color: ${({ theme }) => theme.colors.neutrals[100]};

  margin: auto;

  > strong {
    font-size: ${({ theme }) => theme.spaces.x4};
    font-weight: 600;
  }
`;

export const UserInputWrapper = styled.div`
  grid-area: UserInput;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
