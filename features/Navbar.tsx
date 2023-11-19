import { CameraIcon, IconSize, LoginIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const signed = 1;
  return (
    <div className="navbar p-2 md:p-4">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl btn-lg" href={"/"}>
          <CameraIcon size={IconSize.xl} />
          Tayle Swift's Stories
        </Link>
      </div>
      <div className="flex-none gap-2">
        {signed ? (
          <Link className="avatar btn btn-circle" href={"/profile"}>
            <div className="w-10 rounded-full">
              <Image
                src="/images/profile.jpg"
                width={56}
                height={64}
                alt="profile image"
              />
            </div>
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
