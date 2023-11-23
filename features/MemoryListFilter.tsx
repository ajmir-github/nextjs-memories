"use client";
import { SearchIcon, SortDownIcon, SortUpIcon } from "@/components/Icons";
import { useState } from "react";

export default function MemoryFilter() {
  const [ascending, setAscending] = useState<boolean>(true);
  const toggleSort = () => setAscending((pre) => !pre);
  return (
    <div className="flex justify-between items-center gap-2 w-full">
      {ascending ? (
        <button className={"btn btn-sm md:btn-md"} onClick={toggleSort}>
          <SortDownIcon />
          <span className="hidden md:block">Newest</span>
        </button>
      ) : (
        <button className={"btn btn-sm md:btn-md"} onClick={toggleSort}>
          <SortUpIcon />
          <span className="hidden md:block">Oldest</span>
        </button>
      )}

      <input
        className="input input-sm md:input-md max-w-sm grow"
        placeholder="search"
        type="search"
        autoComplete="on"
      />
    </div>
  );
}
