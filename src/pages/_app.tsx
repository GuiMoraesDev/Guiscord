import { AppProps } from 'next/app';
import NextHead from 'next/head';

import { ThemeProvider } from 'styled-components';

import appConfig from 'configs/app-config';

import GlobalAppProvider from 'context';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalAppProvider>
      <ThemeProvider theme={theme}>
        <NextHead>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link rel="icon" href="/static/favicon.ico" />

          <title>{appConfig.name}</title>
        </NextHead>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalAppProvider>
  );
};

export default App;
