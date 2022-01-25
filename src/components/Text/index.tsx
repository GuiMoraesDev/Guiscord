import { PropsWithChildren } from 'react';

import { TextPropsDefault } from './dtos';
import * as Styles from './styles';

const Text = ({
  children,
  as: HtmlTag,
  ...props
}: PropsWithChildren<TextPropsDefault>): JSX.Element => {
  return (
    <Styles.Text
      as={HtmlTag}
      className={`${props.className} text-component`}
      {...props}
    >
      {children}
    </Styles.Text>
  );
};

Text.defaultProps = {
  size: 'body3',
  variant: 'neutral',
};

export default Text;
