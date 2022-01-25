import { DefaultTheme } from 'styled-components';

import breakpoints from './breakpoints';
import colors from './colors';
import spaces from './spaces';
import typography from './typography';

const theme: DefaultTheme = {
  breakpoints,
  colors,
  transition: {
    slow: '0.4s',
    normal: '0.3s',
    fast: '0.2s',
  },
  spaces,
  typography,
  rounded: {
    full: '8000rem',
    lg: '1rem',
    md: '0.8rem',
    none: 'none',
    sm: '0.4rem',
  },
};

export default theme;
