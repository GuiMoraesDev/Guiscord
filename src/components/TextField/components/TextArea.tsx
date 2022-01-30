import React, { HTMLAttributes } from 'react';

import lodash from 'lodash';

import { TextFieldDefaultProps } from '../dtos';
import * as Styles from '../styles';

type TextFieldProps = TextFieldDefaultProps &
  HTMLAttributes<HTMLTextAreaElement>;

const TextField: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextFieldProps
> = (
  {
    label,
    disabled,
    handleOnChange,
    handleDebounceOnChange,
    fullWidth,
    ...props
  },
  ref
): JSX.Element => {
  const isDisabled = Boolean(disabled);

  const debounced = React.useRef(
    lodash.debounce((newValue) => {
      handleDebounceOnChange?.(newValue);
    }, 500)
  );

  const handleChangeValue = (newValue: string) => {
    handleOnChange?.(newValue);

    if (handleDebounceOnChange) debounced.current(newValue);
  };

  return (
    <Styles.TextFieldContainer isDisabled={isDisabled} fullWidth={fullWidth}>
      {label && <Styles.Label>{label}</Styles.Label>}
      <Styles.TextAreaTextField
        isDisabled={isDisabled}
        fullWidth={fullWidth}
        {...props}
        onChange={(event) => {
          props.onChange?.(event);
          handleChangeValue(event.target.value);
        }}
        ref={ref}
      />
    </Styles.TextFieldContainer>
  );
};

export default React.forwardRef(TextField);
