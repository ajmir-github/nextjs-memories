"use client";
import classes from "@/utils/classes";
import { useState, ReactNode, useEffect } from "react";
import { useCopyToClipboard, useTimeout } from "usehooks-ts";

export default function LinkCopyButton({
  children,
  url,
}: {
  url: string;
  children: ReactNode;
}) {
  const [copiedValue, copyToClipboard] = useCopyToClipboard();

  return (
    <div
      className={classes(
        " tooltip-left tooltip-success",
        copiedValue && "tooltip tooltip-open"
      )}
      data-tip="Copied!"
      onClick={() => copyToClipboard(url)}
    >
      {children}
    </div>
  );
}
