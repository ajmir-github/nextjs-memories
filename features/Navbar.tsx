import { CameraIcon, IconSize, LoginIcon } from "@/components/Icons";
import UserAvator from "@/components/UserAvator";
import Link from "next/link";

export default function Navbar() {
  const signed = 1;
  return (
    <div className="navbar p-2">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl btn-lg" href={"/"}>
          <CameraIcon size={IconSize.xl} />
          MyLifeStory
        </Link>
      </div>
      <div className="flex-none gap-2">
        {signed ? (
          <UserAvator id="asdas" profile="/images/profile.jpg" />
        ) : (
          <Link className="btn" href={"/signin"}>
            <LoginIcon /> Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
