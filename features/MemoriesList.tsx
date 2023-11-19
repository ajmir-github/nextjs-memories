import { HashTagIcon, IconSize, TagIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

function MemoryCard({ memory }: { memory: number }) {
  return (
    <article>
      <div className="rounded-box border-2 shadow overflow-hidden flex flex-col gap-2">
        <Image
          className="w-full"
          src={`/images/${memory}.jpg`}
          alt="Shoes"
          width={800}
          height={600}
        />
        <div className="prose grid p-4 md:p-6">
          <h2>Shoes!</h2>
          <p>
            {memory % 2 > 0
              ? "asdasdasd"
              : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          illum similique enim molestiae vero blanditiis autem cupiditate dicta
          accusantium fuga aliquid, magni amet eos delectus sed at dolorem earum
          voluptates.`}
          </p>

          <div className="flex flex-wrap gap-2">
            <Link
              href={`/tag=${"tag"}`}
              className="btn btn-xs md:btn-sm btn-primary"
            >
              <HashTagIcon size={IconSize.xs} /> tags 1
            </Link>
            <Link
              href={`/tag=${"tag"}`}
              className="btn btn-xs md:btn-sm btn-primary"
            >
              <HashTagIcon size={IconSize.xs} /> tags 1 tags 2
            </Link>
            <Link
              href={`/tag=${"tag"}`}
              className="btn btn-xs md:btn-sm btn-primary"
            >
              <HashTagIcon size={IconSize.xs} /> tags 1 tags 3
            </Link>
            <Link
              href={`/tag=${"tag"}`}
              className="btn btn-xs md:btn-sm btn-primary"
            >
              <HashTagIcon size={IconSize.xs} /> tags 1 tags 4
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MemoriesList() {
  const memories = [1, 2, 3, 4, 5];
  return (
    <div className="grid gap-2 md:gap-4 lg:grid-cols-2">
      {memories.map((memory) => (
        <MemoryCard key={memory} memory={memory} />
      ))}
    </div>
  );
}
