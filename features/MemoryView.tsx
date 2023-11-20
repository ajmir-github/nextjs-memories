import { EditIcon, HashTagIcon, IconSize } from "@/components/Icons";
import { Memory } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function MemoryView({ memory }: { memory: Memory }) {
  const signed = true;
  return (
    <article>
      <div className="rounded-box border-2 shadow overflow-hidden flex flex-col gap-2 relative">
        {signed && (
          <Link
            className="absolute right-4 top-4 btn btn-sm"
            href={"/edit/safdsf"}
          >
            <EditIcon size={IconSize.sm} /> Edit
          </Link>
        )}
        <Image
          className="w-full"
          src={memory.caption}
          alt="Shoes"
          width={800}
          height={600}
        />
        <div className="prose grid p-4 md:p-6">
          <h2>{memory.title}</h2>
          <p>{memory.body}</p>

          <div className="flex flex-wrap gap-2">
            {memory.tags.map((tag) => (
              <Link
                href={`/?tag=${tag}`}
                className="btn btn-xs md:btn-sm btn-secondary btn-outline"
              >
                <HashTagIcon size={IconSize.xs} /> {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
