import * as React from "react";
import {
  Row as EmailRow,
  RowProps,
  Column as EmailColumn,
} from "@react-email/components";

interface Props extends RowProps {
  cols: number;
  children: React.ReactNode[];
}

export function Column(props: Props) {
  return (
    <EmailRow>
      {Array.from({ length: props.cols }).map((_, index) => (
        <EmailColumn>{props.children[index]}</EmailColumn>
      ))}
    </EmailRow>
  );
}
