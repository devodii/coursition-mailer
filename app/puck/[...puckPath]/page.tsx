import { Client } from "./client";
import { Metadata } from "next";
import { getPage } from "../../../lib/get-page";

export async function generateMetadata({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const path = `/${puckPath.join("/")}`;

  return {
    title: "Email: " + path,
    description:
      "Schedule courses to your customers via emails with one click!",
  };
}

export default async function Page() {
  return <Client />;
}
