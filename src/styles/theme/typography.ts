import { css } from 'styled-components';

const typography = {
  fontFamily: "'Open Sans', sans-serif",
  variants: {
    display1: css`
      font-size: 48px;
      letter-spacing: -0.04px;
      font-weight: 900;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 60px;
      }
    `,
    heading1: css`
      font-size: 36px;
      letter-spacing: -0.04px;
      font-weight: 900;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 48px;
      }
    `,
    heading2: css`
      font-size: 24px;
      letter-spacing: -0.04px;
      font-weight: 900;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 36px;
      }
    `,
    heading3: css`
      font-size: 20px;
      letter-spacing: -0.04px;
      font-weight: bold;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 30px;
      }
    `,
    heading4: css`
      font-size: 16px;
      letter-spacing: -0.04px;
      font-weight: bold;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 20px;
      }
    `,
    heading5: css`
      font-size: 14px;
      letter-spacing: -0.04px;
      font-weight: bold;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 16px;
      }
    `,
    body1: css`
      font-size: 18px;
      font-weight: 400;
    `,
    body2: css`
      font-size: 16px;
      font-weight: 400;
    `,
    body3: css`
      font-size: 14px;
      font-weight: 400;
    `,
    body4: css`
      font-size: 12px;
      font-weight: 400;
    `,
  },
};

export default typography;
