import {
  Container as EmailContainer,
  ContainerProps as EmailContainerProps,
} from "@react-email/components";
import * as React from "react";

// A layout component that centers all the email content.
export function Container(props: EmailContainerProps) {
  return <EmailContainer>{props.children}</EmailContainer>;
}
