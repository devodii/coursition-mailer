import {
  Heading as EmailHeading,
  HeadingProps,
  Text as EmailText,
  TextProps as EmailTextProps,
} from "@react-email/components";
import * as React from "react";

export function Heading(props: HeadingProps) {
  return (
    <EmailHeading {...props} className="text-3xl font-semibold">
      {props.children}
    </EmailHeading>
  );
}

export function Text(props: EmailTextProps) {
  return <EmailText>{props.children}</EmailText>;
}
