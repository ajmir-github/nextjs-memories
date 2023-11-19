export default function classes(...cls: any[]) {
  return cls.filter(Boolean).join(" ");
}
