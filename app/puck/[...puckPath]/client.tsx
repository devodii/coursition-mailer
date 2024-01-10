"use client";

import { Data, Puck } from "@measured/puck";
import { __isBrowser__ } from "lib/constant";
import config from "../../../puck.config";
import { convertToReactEmail } from "lib/algorithm";

function handleShedule(data: any) {
  console.log({ data });
  const emailContent = convertToReactEmail(data);

  console.log({ emailContent });
}

function Schedule({ content }: any) {
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

export function Client() {
  const data: Data = JSON.parse(localStorage.getItem("data")!) || {
    content: [],
    root: { props: { title: "" } },
    zones: {},
  };

  return (
    <Puck
      config={config}
      data={data}
      onChange={(data) => localStorage.setItem("data", JSON.stringify(data))}
      renderHeader={() => <Schedule content={data.content} />}
    />
  );
}
