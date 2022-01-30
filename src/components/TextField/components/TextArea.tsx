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
    handleOnChange,
    handleDebounceOnChange,
    fullWidth = false,
    disabled = false,
    dimension = 'sm',
    rounded = 'sm',
    variant = 'neutral',
    placeholder = 'Type here...',
    error = undefined,
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
        {...props}
        isDisabled={isDisabled}
        fullWidth={fullWidth}
        onChange={(event) => {
          props.onChange?.(event);
          handleChangeValue(event.target.value);
        }}
        dimension={dimension}
        rounded={rounded}
        variant={variant}
        placeholder={placeholder}
        error={error}
        ref={ref}
      />
      {console.log('error', error)}
      {!error?.isValid && (
        <Styles.ErrorMessage>{error?.message}</Styles.ErrorMessage>
      )}
    </Styles.TextFieldContainer>
  );
};

export default React.forwardRef(TextField);
