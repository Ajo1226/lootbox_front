import Image from "next/image";
import LootBoxClosed from "@/public/lootbox-closed.gif";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image className=" -mb-20" src={LootBoxClosed} alt="loading..." />
      <span className=" pb-10">
        To open this box, you need to fulfill a task
      </span>
      <a href="tasks" className="bg-blue rounded p-2 px-10">
        Go!
      </a>
    </main>
  );
}
