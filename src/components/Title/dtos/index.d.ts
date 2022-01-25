interface TitlePropsAsHeading extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type TitleProps = TitlePropsAsHeading;

export type { TitleProps };
