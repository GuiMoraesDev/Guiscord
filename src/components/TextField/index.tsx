import React, { HTMLAttributes } from 'react';

import lodash from 'lodash';
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
  extends Omit<TextFieldDefaultPropsThatMakeStyles, 'isDisabled'>,
    HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  disabled?: boolean;
  handleOnChange?(value: string): void;
  handleDebounceOnChange?(value: string): void;
}

type TextFieldProps = TextFieldDefaultProps;

const TextField = ({
  label,
  type,
  disabled,
  handleOnChange,
  handleDebounceOnChange,
  fullWidth,
  ...props
}: TextFieldProps): JSX.Element => {
  const isDisabled = Boolean(disabled);

  const HtmlTag = type === 'textarea' ? 'textarea' : 'input';

  const debounced = React.useRef(
    lodash.debounce((newValue) => {
      handleDebounceOnChange?.(newValue);
    }, 200)
  );

  const handleChangeValue = (newValue: string) => {
    handleOnChange?.(newValue);

    if (handleDebounceOnChange) debounced.current(newValue);
  };

  return (
    <Styles.TextFieldContainer isDisabled={isDisabled} fullWidth={fullWidth}>
      {label && <Styles.Label>{label}</Styles.Label>}
      <Styles.TextField
        as={HtmlTag}
        isDisabled={isDisabled}
        fullWidth={fullWidth}
        {...props}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          props.onChange?.(event);
          handleChangeValue(event.target.value);
        }}
      />
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
