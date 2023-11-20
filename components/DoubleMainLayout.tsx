import { ReactNode } from "react";

export default function DoubleMainLayout({
  children,
  side,
}: {
  children: ReactNode;
  side: ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
      <div>
        <div className="sticky top-0">{side}</div>
      </div>
      <div className="xl:col-span-2">{children}</div>
    </div>
  );
}
