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
  width: 100%;
  max-width: 700px;
  border-radius: 5px;
  padding: ${({ theme }) => theme.spaces.x8};
  margin: ${({ theme }) => theme.spaces.x4};
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  background-color: ${({ theme }) => theme.colors.neutrals[700]};

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
