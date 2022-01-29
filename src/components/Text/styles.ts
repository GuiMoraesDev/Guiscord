import styled, { css } from 'styled-components';

import { TextDefaultPropsThatMakeStyles } from '.';

export const Text = styled.div<TextDefaultPropsThatMakeStyles>`
  ${({ theme, size }) => css`
    ${theme.typography.variants[size!]}
  `}

  ${({ variant, theme }) => {
    if (variant === 'neutral')
      return css`
        color: ${theme.colors.neutrals['300']};
      `;

    if (variant === 'highlighted')
      return css`
        color: ${theme.colors.neutrals['100']};
        background-color: ${theme.colors.neutrals['900']};

        padding: ${theme.spaces.x1} ${theme.spaces.x2};

        border-radius: ${theme.rounded.full};
      `;
  }}
`;
