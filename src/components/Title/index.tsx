import { ElementType, HTMLAttributes, PropsWithChildren } from "react";

interface TitleProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

const Title = ({
  children,
  as: HtmlTag = "p",
}: PropsWithChildren<TitleProps>): JSX.Element => {
  return (
    <>
      <HtmlTag>{children}</HtmlTag>
      <style jsx>
        {`
          ${HtmlTag} {
            color: red;
            font-size: 24px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default Title;
