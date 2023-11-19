import { IconType } from "react-icons";
import {
  FaCameraRetro,
  FaRegUser,
  FaRegEdit,
  FaHashtag,
  FaTag,
  FaTags,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { TbCalendarEvent } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { BiSortDown, BiSortUp } from "react-icons/bi";

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
export const DateIcon = iconWrapper(TbCalendarEvent);
export const LocationIcon = iconWrapper(FaLocationDot);
export const UserIcon = iconWrapper(FaRegUser);
export const LoadMoreIcon = iconWrapper(MdOutlineKeyboardDoubleArrowDown);
export const SortUpIcon = iconWrapper(BiSortUp);
export const SortDownIcon = iconWrapper(BiSortDown);
export const FilternIcon = iconWrapper(FaFilter);
export const SearchIcon = iconWrapper(FaSearch);
