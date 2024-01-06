"use client";

type Content = any; // TODO: Add Type!

function handleShedule(data: Content) {
  console.log({ data });
}

export function Schedule() {
  const content = JSON.parse(localStorage.getItem("data")!);
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
