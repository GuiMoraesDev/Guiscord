import { PropsWithChildren } from "react";
import { ButtonProps } from "./dtos";

import * as Styles from "./styles";

const Button = ({
  as: HtmlTag,
  label,
  ...props
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <Styles.Button
      {...props}
      as={HtmlTag}
      isDisabled={Boolean(props.disabled)}
    >
      {label}
    </Styles.Button>
  );
};

Button.defaultProps = {
  fullWidth: false,
  size: "sm",
  rounded: "sm",
  variant: "primary",
};

export default Button;
