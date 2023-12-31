"use client";
import { UserIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

export default function UserAvator({
  id,
  profile,
}: {
  id?: string;
  profile?: string;
}) {
  return (
    <Link
      className="avatar btn btn-circle"
      href={id ? `/profile/${id}` : "/profile"}
    >
      {profile ? (
        <div className="w-12 rounded-full">
          <Image src={profile} width={64} height={64} alt="profile image" />
        </div>
      ) : (
        <UserIcon />
      )}
    </Link>
  );
}
