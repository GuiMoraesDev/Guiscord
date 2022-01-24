import { PropsWithChildren } from "react";
import { TextProps } from "./dtos";

import * as Styles from "./styles";

const Text = ({
  children,
  as: HtmlTag,
  ...props
}: PropsWithChildren<TextProps>): JSX.Element => {
  return (
    <Styles.Text as={HtmlTag} {...props}>
      {children}
    </Styles.Text>
  );
};

export default Text;
