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
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  border-radius: 5px;
  padding: 32px;
  margin: 16px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  background-color: ${({ theme }) => theme.colors.neutrals[700]};

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-bottom: 32px;

  .text-component {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 480px) {
    width: 50%;
  }
`;

export const UserCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 200px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutrals[800]};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.neutrals[999]};
  border-radius: 10px;
  flex: 1;
  min-height: 240px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  > img {
    width: 100%;

    border-radius: ${({ theme }) => theme.rounded.full};
  }
`;
