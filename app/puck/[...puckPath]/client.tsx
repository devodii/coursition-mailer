"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";
import { __isBrowser__ } from "lib/constant";

function handleShedule(data: any) {
  console.log({ data });
}

function Schedule() {
  const content = __isBrowser__
    ? JSON.parse(localStorage.getItem("data")!)
    : {};
  return (
    <div className="w-screen flex items-end justify-end py-5">
      <button
        onClick={() => handleShedule(content)}
        className="bg-blue-500 w-full max-w-[200px] px-3 py-1.5 mr-5"
      >
        Schedule
      </button>
    </div>
  );
}

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
