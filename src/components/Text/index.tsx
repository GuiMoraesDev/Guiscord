import { PropsWithChildren } from 'react';
import { HTMLAttributes } from 'react';

import { DefaultTheme } from 'styled-components';

import * as Styles from './styles';

export interface TextDefaultPropsThatMakeStyles {
  size?: keyof DefaultTheme['typography']['variants'];
  variant?: 'neutral' | 'highlighted';
}

interface TextPropsDefault
  extends TextDefaultPropsThatMakeStyles,
    HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'li' | 'label' | 'strong';
}

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
