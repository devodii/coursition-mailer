import { Button as EmailButton } from "@react-email/components";
import * as React from "react";

// ! ButtonProps wasn't exported from react-email.
interface Props extends React.ComponentPropsWithoutRef<"a"> {}

export function Button(props: Props) {
  return (
    <EmailButton
      href={props.href}
      style={{ color: "#61dafb", padding: "10px 20px" }}
      {...props}
    >
      {props.children}
    </EmailButton>
  );
}
