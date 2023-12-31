"use client";
import {
  FacebookIcon,
  LinkIcon,
  LinkedinIcon,
  SendIcon,
  TelegramIcon,
} from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { User } from "@prisma/client";

export default function UserProfile({ user }: { user: User }) {
  return (
    <div className="flex justify-center">
      <div className="gap-4 flex flex-col grow max-w-sm">
        <div className="flex flex-col items-center gap-4 ">
          <div className="avatar w-72 rounded-box overflow-hidden">
            <Image
              src={user.profile || "/images/profile.jpg"}
              width={256}
              height={256}
              alt={user.name}
            />
          </div>
          <div>
            <div className="flex gap-2 items-center justify-center">
              <span className="btn btn-circle btn-ghost">
                <FacebookIcon />
              </span>

              <span className="btn btn-circle btn-ghost">
                <LinkedinIcon />
              </span>

              <span className="btn btn-circle btn-ghost">
                <TelegramIcon />
              </span>

              <Link
                href={"mailto:safasdf@gmail.com"}
                className="btn btn-circle btn-ghost"
              >
                <SendIcon />
              </Link>

              <span className="btn btn-circle btn-ghost">
                <LinkIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="prose prose-lg">
          <h2 className="mb-2 mt-4">{user.name}</h2>
          {user.bio && <p>{user.bio}</p>}
        </div>
      </div>
    </div>
  );
}
