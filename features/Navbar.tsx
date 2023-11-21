"use client";
import { CameraIcon, IconSize, LoginIcon, UserIcon } from "@/components/Icons";
import Link from "next/link";
import { useAuth } from "./AuthState";
import Image from "next/image";

export default function Navbar() {
  const auth = useAuth();
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar btn btn-circle">
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
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/profile"} className="justify-between">
                  Profile
                </Link>
              </li>

              <li>
                <Link href={"/signout"} className="justify-between">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn" href={"/auth/signin"}>
            <LoginIcon /> Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
