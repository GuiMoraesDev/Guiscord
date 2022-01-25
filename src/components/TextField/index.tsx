import React from "react";
import { TextFieldProps } from "./dtos";

import * as Styles from "./styles";

const TextField = ({
  label,
  type,
  disabled,
  ...props
}: TextFieldProps): JSX.Element => {
  const [currentType, setCurrentType] = React.useState(type || "text");

  const handleToggleType = () => {
    setCurrentType((state) => (state === "password" ? "text" : "password"));
  };

  const isDisabled = Boolean(disabled);

  const HtmlTag = type === "textarea" ? "textarea" : "input";

  return (
    <Styles.TextFieldContainer isDisabled={isDisabled} {...props}>
      {label && <Styles.Label>{label}</Styles.Label>}
      <Styles.TextField
        as={HtmlTag}
        isDisabled={isDisabled}
        type={currentType}
        {...props}
      />
    </Styles.TextFieldContainer>
  );
};

TextField.defaultProps = {
  fullWidth: false,
  disabled: false,
  type: "text",
  size: "sm",
  rounded: "sm",
  placeholder: 'Type here...',
};

export default TextField;
