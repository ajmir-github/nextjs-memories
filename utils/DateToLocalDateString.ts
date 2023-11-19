import dayjs from "dayjs";

export default function DateToLocalDateString(date: Date): string {
  return dayjs(date).format("MMM DD, YYYY");
}
