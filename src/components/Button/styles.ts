import styled, { css } from 'styled-components';

import { ButtonDefaultPropsThatMakeStyles } from '.';

export const Button = styled.button<ButtonDefaultPropsThatMakeStyles>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: transparent;

  transition: all ${({ theme }) => theme.transition.normal} ease-in-out;

  margin: ${({ theme }) => theme.spaces.x1};

  ${({ theme, rounded }) => {
    return css`
      border-radius: ${theme.rounded[rounded || 'none']};
    `;
  }}

  ${({ theme, isDisabled }) => {
    if (isDisabled)
      return css`
        background-color: ${theme.colors.neutrals[300]}!important;
      `;
  }}

  ${({ fullWidth }) => {
    if (fullWidth)
      return css`
        width: 100%;
      `;
  }}

  ${({ size, theme }) => {
    if (size === 'xs')
      return css`
        ${theme.typography.variants.body4};
        padding: ${theme.spaces['x1.5']} ${theme.spaces['x2.5']};
      `;

    if (size === 'sm')
      return css`
        ${theme.typography.variants.body3};

        padding: ${theme.spaces['x2']} ${theme.spaces['x3']};
      `;

    if (size === 'md')
      return css`
        ${theme.typography.variants.body3};

        padding: ${theme.spaces['x2']} ${theme.spaces['x4']};
      `;
    if (size === 'lg')
      return css`
        ${theme.typography.variants.body2};

        padding: ${theme.spaces['x2']} ${theme.spaces['x4']};
      `;

    if (size === 'xl')
      return css`
        ${theme.typography.variants.body2};

        padding: ${theme.spaces['x3']} ${theme.spaces['x6']};
      `;

    if (size === 'square')
      return css`
        ${theme.typography.variants.body2};

        padding: ${theme.spaces['x2']};
      `;
  }}

  ${({ variant, theme }) => {
    if (variant === 'primary')
      return css`
        color: ${theme.colors.neutrals['000']};
        background-color: ${theme.colors.primary[500]};

        &:hover {
          color: ${theme.colors.neutrals['050']};
          background-color: ${theme.colors.primary[600]};
        }
      `;

    if (variant === 'outline')
      return css`
        color: ${theme.colors.neutrals['300']};
        background-color: ${theme.colors.transparent};

        border: 1px solid ${theme.colors.neutrals['300']};

        &:hover {
          color: ${theme.colors.neutrals['100']};
          border-color: ${theme.colors.neutrals['100']};
        }
      `;

    if (variant === 'neutral')
      return css`
        color: ${theme.colors.neutrals['300']};
        background-color: ${theme.colors.transparent};

        &:hover {
          color: ${theme.colors.neutrals['100']};
        }
      `;
  }}
`;
