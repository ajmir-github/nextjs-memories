"use client";
import { CameraIcon, IconSize, LoginIcon, UserIcon } from "@/components/Icons";
import Link from "next/link";
import { useAuth } from "./AuthState";
import Image from "next/image";

export default function Navbar() {
  const [auth, setAuth] = useAuth();
  return (
    <div className="navbar p-2">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl btn-lg" href={"/"}>
          <CameraIcon size={IconSize.xl} />
          MyLifeStory
        </Link>
      </div>
      <div className="flex-none gap-2">
        {auth ? (
          <Link href={"/profiles/self"} className="avatar btn btn-circle">
            {auth.profile ? (
              <div className="w-12 rounded-full">
                <Image
                  src={auth.profile}
                  width={64}
                  height={64}
                  alt="profile image"
                />
              </div>
            ) : (
              <UserIcon />
            )}
          </Link>
        ) : (
          <Link className="btn" href={"/signin"}>
            <LoginIcon /> Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
