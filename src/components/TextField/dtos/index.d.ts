import { DefaultTheme } from 'styled-components';

export interface TextFieldDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  dimension?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: keyof DefaultTheme['rounded'];
  variant?: 'positive' | 'negative' | 'neutral';
  isDisabled?: boolean;
}

export interface TextFieldDefaultProps
  extends Omit<TextFieldDefaultPropsThatMakeStyles, 'isDisabled'> {
  label?: string;
  disabled?: boolean;
  handleOnChange?(value: string): void;
  handleDebounceOnChange?(value: string): void;
}
