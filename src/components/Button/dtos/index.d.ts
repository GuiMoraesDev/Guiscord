import { HTMLAttributes } from "react";

import { DefaultTheme } from "styled-components";

export interface ButtonDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: keyof DefaultTheme["rounded"];
  variant?: "primary" | "secondary" | "outline" | "neutral";
  isDisabled: boolean;
}

interface ButtonDefaultProps
  extends Omit<ButtonDefaultPropsThatMakeStyles, "isDisabled"> {
  label?: string;
  disabled?: boolean;
}

interface ButtonPropsAsButton
  extends HTMLAttributes<HTMLButtonElement>,
    ButtonDefaultProps {
  as?: "button";
}

interface ButtonPropsAsAnchor
  extends HTMLAttributes<HTMLAnchorElement>,
    ButtonDefaultProps {
  as?: "a";
}

type ButtonProps = ButtonPropsAsButton | ButtonPropsAsAnchor;

export type { ButtonProps };
