import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: transparent;

  transition: all ${({ theme }) => theme.transition.normal} ease-in-out;

  margin: ${({ theme }) => theme.spaces.x1};
`;

interface IStickersWrapperProps {
  isOpen: boolean;
}

export const StickersWrapper = styled.div<IStickersWrapperProps>`
  position: absolute;

  bottom: 0;
  right: 0;

  display: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: ${({ theme }) => theme.spaces.x2};

  border: transparent;

  width: max-content;
  max-width: 40vw;
  height: auto;

  background-color: ${({ theme }) => theme.colors.neutrals[800]};

  padding: ${({ theme }) => theme.spaces.x6};

  transition: all ${({ theme }) => theme.transition.normal} ease-in-out;

  border-radius: ${({ theme }) => theme.rounded.md};

  transform: ${({ theme }) => css`translateY(-${theme.spaces.x12})`};

  margin: ${({ theme }) => theme.spaces.x1};

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
    `}

  > button {
    display: block;

    width: 100%;
    max-width: 80px;
    height: 100%;
    max-height: 80px;

    border: none;

    transition: all ${({ theme }) => theme.transition.fast} ease-in-out;

    :hover {
      border: 1px solid ${({ theme }) => theme.colors.neutrals[100]};

      transform: scale(1.1);
    }

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Button = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: transparent;

  transition: all ${({ theme }) => theme.transition.normal} ease-in-out;

  margin: ${({ theme }) => theme.spaces.x1};
`;
