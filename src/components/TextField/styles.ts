import styled, { css } from 'styled-components';

import { TextFieldDefaultPropsThatMakeStyles } from './dtos';

export const TextFieldContainer = styled.div<TextFieldDefaultPropsThatMakeStyles>`
  display: block;

  padding: ${({ theme }) => theme.spaces['x2']} 0;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export const Label = styled.label``;

export const TextField = styled.input<TextFieldDefaultPropsThatMakeStyles>`
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  border: transparent;

  transition: all ${({ theme }) => theme.transition.normal} ease-in-out;

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

  ${({ variant, theme }) => {
    if (variant === 'neutral')
      return css`
        color: ${theme.colors.neutrals['000']};
        background-color: ${theme.colors.neutrals['800']};

        border: 1px solid ${theme.colors.neutrals[900]};

        &:focus {
          border: 1px solid ${theme.colors.neutrals[999]};
        }
      `;

    if (variant === 'positive')
      return css`
        color: ${theme.colors.neutrals['000']};
        background-color: ${theme.colors.neutrals['800']};

        border: 1px solid ${theme.colors.neutrals[900]};

        &:focus {
          border: 1px solid ${theme.colors.neutrals[999]};
        }
      `;

    if (variant === 'negative')
      return css`
        color: ${theme.colors.neutrals['000']};
        background-color: ${theme.colors.neutrals['800']};

        border: 1px solid ${theme.colors.neutrals[900]};

        &:focus {
          border: 1px solid ${theme.colors.neutrals[999]};
        }
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
        ${theme.typography.variants.body1};

        padding: ${theme.spaces['x3']} ${theme.spaces['x6']};
      `;
  }}
`;
