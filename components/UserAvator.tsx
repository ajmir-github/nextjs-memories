import { UserIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

export default function UserAvator({
  id,
  profile,
}: {
  id: string;
  profile?: string;
}) {
  return (
    <Link className="avatar btn btn-circle" href={`/profile/${id}`}>
      <div className="w-12 rounded-full">
        {profile ? (
          <Image src={profile} width={64} height={64} alt="profile image" />
        ) : (
          <UserIcon />
        )}
      </div>
    </Link>
  );
}
