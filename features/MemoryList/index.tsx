import { Memory } from "@prisma/client";
import MemoryCard from "./MemoryCard";

export default function MemoriesList({ memories }: { memories: Memory[] }) {
  return (
    <div className="grid gap-2 md:gap-4 md:grid-cols-2 xl:grid-cols-3">
      {memories.map((memory) => (
        <MemoryCard key={memory.id} memory={memory} />
      ))}
    </div>
  );
}
