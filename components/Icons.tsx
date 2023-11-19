import { IconType } from "react-icons";
import { FaCameraRetro } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaTag, FaTags } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

export enum IconSize {
  xs = 14,
  sm = 18,
  md = 24,
  lg = 28,
  xl = 32,
}

interface IconProps {
  size?: IconSize;
}

function iconWrapper(Icon: IconType) {
  return ({ size }: IconProps) => <Icon size={size || IconSize.md} />;
}

export const CameraIcon = iconWrapper(FaCameraRetro);
export const LoginIcon = iconWrapper(CiLogin);
export const TagIcon = iconWrapper(FaTag);
export const TagsIcon = iconWrapper(FaTags);
export const HashTagIcon = iconWrapper(FaHashtag);
export const EditIcon = iconWrapper(FaRegEdit);
