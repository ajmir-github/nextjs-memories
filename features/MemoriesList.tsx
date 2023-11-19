import { DateIcon, IconSize, LocationIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

interface Memory {
  id: string;
  caption: string;
}

function MemoryCard({ memory }: { memory: Memory }) {
  return (
    <article>
      <Link
        href={`/memory/${memory.id}`}
        className="rounded-box border-2 shadow overflow-hidden flex flex-col gap-2 relative"
      >
        <Image
          className="w-full aspect-video"
          src={memory.caption}
          alt="Shoes"
          width={800}
          height={600}
        />
        <div className="absolute left-0 bottom-0 text-white w-full flex gap-2 flex-col px-4 py-2 bg-black bg-opacity-50">
          <h2 className="text-lg ">Experincing the night life in Ayia Napa</h2>
          <div className="flex justify-between w-full">
            <time className="flex gap-2 items-center">
              <DateIcon size={IconSize.sm} />
              Mar 10, 2020
            </time>
            <Link
              className="btn btn-xs btn-secondary"
              href={`/?location=${"ayia napa"}`}
            >
              <LocationIcon size={IconSize.sm} />
              Ayia Napa/ Cyprus
            </Link>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function MemoriesList() {
  const memories: Memory[] = [
    {
      id: "1",
      caption: "/images/1.jpg",
    },
    {
      id: "2",
      caption: "/images/2.jpg",
    },
    {
      id: "3",
      caption: "/images/3.jpg",
    },
    {
      id: "4",
      caption: "/images/4.jpg",
    },
    {
      id: "5",
      caption: "/images/5.jpg",
    },
  ];
  return (
    <div className="grid gap-2 md:gap-4 md:grid-cols-2 xl:grid-cols-3">
      {memories.map((memory) => (
        <MemoryCard key={memory.id} memory={memory} />
      ))}
    </div>
  );
}
