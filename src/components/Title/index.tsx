import { PropsWithChildren } from "react";
import { TitleProps } from "./dtos";

import * as Styles from "./styles";

const Title = ({
  children,
  as: HtmlTag,
  ...props
}: PropsWithChildren<TitleProps>): JSX.Element => {
  return (
    <Styles.Title as={HtmlTag} {...props}>
      {children}
    </Styles.Title>
  );
};

export default Title;
