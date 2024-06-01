import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-5 -mt-10">LootBox!</h1>
      <span className="pb-5">To open this box, you need to fulfill a task</span>
      <Link href="tasks" className="bg-blue rounded p-2 px-10">
        Go!
      </Link>
    </main>
  );
}
