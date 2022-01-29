import React from 'react';

import { DefaultTheme } from 'styled-components';

import * as Styles from './styles';

export interface TextFieldDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: keyof DefaultTheme['rounded'];
  variant?: 'positive' | 'negative' | 'neutral';
  isDisabled?: boolean;
  type?: 'textarea' | 'phone' | 'email' | 'password' | 'number' | 'text';
}

interface TextFieldDefaultProps
  extends Omit<TextFieldDefaultPropsThatMakeStyles, 'isDisabled'> {
  label?: string;
  disabled?: boolean;
}

type TextFieldProps = TextFieldDefaultProps;

const TextField = ({
  label,
  type,
  disabled,
  ...props
}: TextFieldProps): JSX.Element => {
  const isDisabled = Boolean(disabled);

  const HtmlTag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <Styles.TextFieldContainer isDisabled={isDisabled} {...props}>
      {label && <Styles.Label>{label}</Styles.Label>}
      <Styles.TextField as={HtmlTag} isDisabled={isDisabled} {...props} />
    </Styles.TextFieldContainer>
  );
};

TextField.defaultProps = {
  fullWidth: false,
  disabled: false,
  type: 'text',
  size: 'sm',
  rounded: 'sm',
  variant: 'neutral',
  placeholder: 'Type here...',
};

export default TextField;
