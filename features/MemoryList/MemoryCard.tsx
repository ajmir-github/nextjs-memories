import { DateIcon, IconSize, LocationIcon } from "@/components/Icons";
import UserAvator from "@/components/UserAvator";
import Image from "next/image";
import Link from "next/link";
import { Memory } from "@prisma/client";
import DateToLocalDateString from "@/utils/DateToLocalDateString";

export default function MemoryCard({ memory }: { memory: Memory }) {
  return (
    <article>
      <div className="rounded-box border-2 shadow overflow-hidden flex flex-col gap-2 relative group">
        <span className="absolute top-0 left-0 p-4 z-10">
          <UserAvator id="asdas" profile="/images/profile.jpg" />
        </span>

        <Link href={`/memory/${memory.id}`} className="w-full">
          <Image
            className="w-full aspect-video group-hover:scale-105 transition duration-500  z-0"
            src={memory.caption}
            alt={memory.title}
            width={800}
            height={600}
          />
          <div className="absolute left-0 bottom-0 text-white w-full flex gap-2 flex-col p-4 bg-black bg-opacity-30 z-10">
            <h2 className="text-sm md:text-base">{memory.title}</h2>
            <span className="flex justify-between w-full text-xs md:text-sm">
              <time className="flex gap-2 items-center">
                <DateIcon size={IconSize.sm} />
                {DateToLocalDateString(memory.createdAt)}
              </time>
              <span className="flex gap-2 items-center">
                <LocationIcon size={IconSize.sm} />
                Ayia Napa/ Cyprus
              </span>
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
}
