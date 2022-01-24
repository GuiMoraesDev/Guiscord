import { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import appConfig from "styles/config.json";

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
            color: ${appConfig.theme.colors.neutrals["000"]};
            font-size: 24px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default Title;
