import { HTMLAttributes } from 'react';

import { DefaultTheme } from 'styled-components';

export interface TextDefaultPropsThatMakeStyles {
  size?: keyof DefaultTheme['typography']['variants'];
  variant?: 'neutral' | 'highlighted';
}

interface TextPropsDefault
  extends TextDefaultPropsThatMakeStyles,
    HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'li' | 'label' | 'strong';
}

export type { TextPropsDefault };
