import { HashTagIcon, IconSize } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

export default function FullMemoryView({ memory }: { memory: number }) {
  const signed = true;
  return (
    <article>
      <div className="rounded-box border-2 shadow overflow-hidden flex flex-col gap-2 relative">
        {signed && (
          <Link
            className="absolute right-4 top-4 btn btn-sm btn-outline btn-primary"
            href={"/edit/safdsf"}
          >
            <EditIcon size={IconSize.sm} /> Edit
          </Link>
        )}
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
              className="btn btn-xs md:btn-sm btn-secondary btn-outline"
            >
              <HashTagIcon size={IconSize.xs} /> tags 1
            </Link>
            <Link
              href={`/tag=${"tag"}`}
              className="btn btn-xs md:btn-sm btn-secondary btn-outline"
            >
              <HashTagIcon size={IconSize.xs} /> tags 1 tags 2
            </Link>
            <Link
              href={`/tag=${"tag"}`}
              className="btn btn-xs md:btn-sm btn-secondary btn-outline"
            >
              <HashTagIcon size={IconSize.xs} /> tags 1 tags 3
            </Link>
            <Link
              href={`/tag=${"tag"}`}
              className="btn btn-xs md:btn-sm btn-secondary btn-outline"
            >
              <HashTagIcon size={IconSize.xs} /> tags 1 tags 4
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
