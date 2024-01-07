import * as React from "react";
import {
  Head as EmailHead,
  HeadProps as EmailHeadProps,
} from "@react-email/components";

export function Head(props: EmailHeadProps) {
  return <EmailHead {...props}>{props.children}</EmailHead>;
}
