import React, { HTMLAttributes } from 'react';
import * as Icons from 'react-icons/fa';

import { DefaultTheme } from 'styled-components';

import * as Styles from './styles';

export interface ButtonDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  dimension?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'square';
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
  onClick?(): void;
}

type ButtonProps = ButtonDefaultProps & HTMLAttributes<HTMLButtonElement>;

const Button = ({
  as: HtmlTag,
  label,
  icon,
  ...props
}: ButtonProps): JSX.Element => {
  const IconComponent = Icons[icon!];

  const handleClick = React.useCallback(
    (event) => {
      event.preventDefault();

      props.onClick?.();
    },
    [props]
  );

  return (
    <Styles.Button
      as={HtmlTag}
      {...props}
      onClick={handleClick}
      isDisabled={Boolean(props.disabled)}
    >
      {icon && <IconComponent />}
      {label}
    </Styles.Button>
  );
};

Button.defaultProps = {
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'primary',
};

export default Button;
