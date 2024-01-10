import Link from "next/link";

export { generateMetadata } from "./[...puckPath]/page";

export default async function IndexPage() {
  return (
    <main className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <h2>Welcome!</h2>
      <div className="flex items-center gap-1">
        Click{" "}
        <Link href="/puck/edit" className="underline underline-offset-2">
          here
        </Link>{" "}
        to start creating your email courses
      </div>
    </main>
  );
}
