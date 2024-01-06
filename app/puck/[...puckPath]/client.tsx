"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";
import { Schedule } from "@components/schedule-button";

const isBrowser = typeof window !== "undefined";

export function Client({ data }: { data: Data }) {
  return (
    <Puck
      config={config}
      data={data}
      onChange={(data) => localStorage.setItem("data", JSON.stringify(data))}
      renderHeader={() => <Schedule />}
    />
  );
}
