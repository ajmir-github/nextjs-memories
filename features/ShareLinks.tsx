"use client";
import {
  FacebookIcon,
  LinkIcon,
  LinkedinIcon,
  SendIcon,
  TelegramIcon,
  WhatsupIcon,
} from "@/components/Icons";
import Link from "next/link";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "react-share";
import LinkCopyButton from "@/components/LinkCopyButton";

export default function ShareLinks({ shareLink }: { shareLink: string }) {
  return (
    <div className="flex gap-2 items-center justify-center">
      <FacebookShareButton url={shareLink}>
        <span className="btn btn-circle btn-ghost">
          <FacebookIcon />
        </span>
      </FacebookShareButton>

      <LinkedinShareButton url={shareLink}>
        <span className="btn btn-circle btn-ghost">
          <LinkedinIcon />
        </span>
      </LinkedinShareButton>

      <WhatsappShareButton url={shareLink}>
        <span className="btn btn-circle btn-ghost">
          <WhatsupIcon />
        </span>
      </WhatsappShareButton>

      <TelegramShareButton url={shareLink}>
        <span className="btn btn-circle btn-ghost">
          <TelegramIcon />
        </span>
      </TelegramShareButton>

      <LinkCopyButton url={shareLink}>
        <span className="btn btn-circle btn-ghost">
          <LinkIcon />
        </span>
      </LinkCopyButton>
      <Link
        href={"mailto:safasdf@gmail.com"}
        className="btn btn-circle btn-ghost"
      >
        <SendIcon />
      </Link>
    </div>
  );
}
