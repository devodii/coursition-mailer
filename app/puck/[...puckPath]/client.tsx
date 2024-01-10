"use client";

import { Puck } from "@measured/puck";
import { __isBrowser__ } from "lib/constant";
import config from "../../../puck.config";

function handleShedule(data: any) {
  console.log({ data });
}

function Schedule(props: any) {
  return (
    <div className="w-screen flex items-end justify-end py-5">
      <button
        onClick={() => handleShedule(props.content)}
        className="bg-blue-500 w-full max-w-[200px] px-3 py-1.5 mr-5"
      >
        Schedule
      </button>
    </div>
  );
}

export function Client() {
  const content = __isBrowser__
    ? JSON.parse(localStorage.getItem("data")!)
    : {};
  return (
    <Puck
      config={config}
      data={content}
      onChange={(data) => localStorage.setItem("data", JSON.stringify(data))}
      renderHeader={() => <Schedule content={content} />}
    />
  );
}
