import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0.312vw;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutrals[200]};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    
    width: 2rem;
    height: 2rem;

    margin-left: 0.4em;
    
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
    background-repeat: no-repeat;

    cursor: pointer;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    list-style: none;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  html,
  body,
  #__next {
    min-height: 100vh;

    display: flex;

    flex: 1;
  }

  #__next {
    flex: 1;
    
    > * {
      flex: 1;
    }
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a, button {
    background: transparent;

    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.neutrals[400]};
  }

  img {
    object-fit: cover;

    word-break: break-all;
  }
`;
