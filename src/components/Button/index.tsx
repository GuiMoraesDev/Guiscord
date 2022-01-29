import { PropsWithChildren } from 'react';
import * as Icons from 'react-icons/fa';

import { DefaultTheme } from 'styled-components';

import * as Styles from './styles';

export interface ButtonDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: keyof DefaultTheme['rounded'];
  variant?: 'primary' | 'secondary' | 'outline' | 'neutral';
  isDisabled: boolean;
  icon?: keyof typeof Icons;
}

interface ButtonDefaultProps
  extends Omit<ButtonDefaultPropsThatMakeStyles, 'isDisabled'> {
  as?: 'button' | 'a';
  label?: string;
  disabled?: boolean;
  href?: string;
}

type ButtonProps = ButtonDefaultProps;

const Button = ({
  as: HtmlTag,
  label,
  icon,
  ...props
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  const IconComponent = Icons[icon!];

  return (
    <Styles.Button {...props} as={HtmlTag} isDisabled={Boolean(props.disabled)}>
      {icon && <IconComponent />}
      {label}
    </Styles.Button>
  );
};

Button.defaultProps = {
  fullWidth: false,
  size: 'sm',
  rounded: 'sm',
  variant: 'primary',
};

export default Button;
