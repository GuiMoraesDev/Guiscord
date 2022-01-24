import { HTMLAttributes } from "react";

import { DefaultTheme } from "styled-components";

export interface TextFieldDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: keyof DefaultTheme["rounded"];
  variant?: "primary" | "secondary" | "outline" | "neutral";
  isDisabled?: boolean;
  type?: "textarea" | "phone" | "email" | "password" | "number" | "text";
}

interface TextFieldDefaultProps
  extends Omit<TextFieldDefaultPropsThatMakeStyles, "isDisabled"> {
  label?: string;
  disabled?: boolean;
}

type TextFieldProps = TextFieldDefaultProps;

export type { TextFieldProps };