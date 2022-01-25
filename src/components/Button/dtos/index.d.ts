import { DefaultTheme } from 'styled-components';

export interface ButtonDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: keyof DefaultTheme['rounded'];
  variant?: 'primary' | 'secondary' | 'outline' | 'neutral';
  isDisabled: boolean;
}

interface ButtonDefaultProps
  extends Omit<ButtonDefaultPropsThatMakeStyles, 'isDisabled'> {
  as?: 'button' | 'a';
  label?: string;
  disabled?: boolean;
  href?: string;
}

type ButtonProps = ButtonDefaultProps;

export type { ButtonProps };
