import { DefaultTheme } from 'styled-components';

interface IErrorDTO {
  message: string;
  isValid?: boolean;
}

export interface IErrorsProps {
  [key: string]: IErrorDTO;
}
export interface TextFieldDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  dimension?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: keyof DefaultTheme['rounded'];
  variant?: 'positive' | 'negative' | 'neutral';
  isDisabled?: boolean;
  error?: IErrorDTO;
}

export interface TextFieldDefaultProps
  extends Omit<TextFieldDefaultPropsThatMakeStyles, 'isDisabled'> {
  label?: string;
  disabled?: boolean;
  handleOnChange?(value: string): void;
  handleDebounceOnChange?(value: string): void;
}
