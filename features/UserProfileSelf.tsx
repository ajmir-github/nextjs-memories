"use client";
import {
  CloseIcon,
  EditIcon,
  FacebookIcon,
  IconSize,
  LinkIcon,
  LinkedinIcon,
  SaveIcon,
  SendIcon,
  TelegramIcon,
  UploadIcon,
} from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { User } from "@prisma/client";
import { useState } from "react";

export default function UserProfileSlef({ user }: { user: User }) {
  return (
    <div className="flex justify-center">
      <div className="gap-4 flex flex-col grow max-w-sm">
        <div className="flex flex-col items-center gap-4 ">
          <div className="avatar w-72 rounded-box overflow-hidden relative">
            <Image
              src={user.profile || "/images/profile.jpg"}
              width={256}
              height={256}
              alt={user.name}
            />
            <button className="btn  absolute top-0 right-0 m-4">
              <UploadIcon /> Upload
            </button>
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
        <div className="prose prose-lg mb-4">
          <h2 className="my-2">{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
}
