interface TextPropsAsParagraph extends HTMLAttributes<HTMLParagraphElement> {
  as?: 'p';
}

interface TextPropsAsSpan extends HTMLAttributes<HTMLSpanElement> {
  as?: 'span';
}

interface TextPropsAsLi extends HTMLAttributes<HTMLLIElement> {
  as?: 'li';
}

interface TextPropsAsLabel extends HTMLAttributes<HTMLLabelElement> {
  as?: 'label';
}

interface TextPropsAsAnchor extends HTMLAttributes<HTMLAnchorElement> {
  as?: 'a';
}

interface TextPropsAsStrong extends HTMLAttributes<HTMLElement> {
  as?: 'strong';
}

type TextProps =
  | TextPropsAsParagraph
  | TextPropsAsSpan
  | TextPropsAsLi
  | TextPropsAsLabel
  | TextPropsAsAnchor
  | TextPropsAsStrong;

export type { TextProps };
