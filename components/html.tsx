import * as React from "react";
import { Html, HtmlProps } from "@react-email/components";

export function Root(props: HtmlProps) {
  return (
    <Html lang="en" dir="ltr">
      <body>{props.children}</body>
    </Html>
  );
}
