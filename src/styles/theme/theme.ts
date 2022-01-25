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
    none: 'none',
    sm: '4px',
    md: '10px',
    lg: '16px',
    full: '10000px',
  },
};

export default theme;
