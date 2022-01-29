import { HTMLAttributes, PropsWithChildren } from 'react';

import * as Styles from './styles';

interface TitlePropsAsHeading extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type TitleProps = TitlePropsAsHeading;

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
