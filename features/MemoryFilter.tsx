"use client";
import { SearchIcon, SortDownIcon, SortUpIcon } from "@/components/Icons";
import { useState } from "react";

export default function MemoryFilter() {
  const [ascending, setAscending] = useState<boolean>(true);
  const toggleSort = () => setAscending((pre) => !pre);
  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
      {ascending ? (
        <button className={"btn btn-sm"} onClick={toggleSort}>
          <SortDownIcon />
          <span className="hidden md:block">Newest</span>
        </button>
      ) : (
        <button className={"btn btn-sm"} onClick={toggleSort}>
          <SortUpIcon />
          <span className="hidden md:block">Oldest</span>
        </button>
      )}

      <div className="join">
        <input
          className="input input-sm join-item"
          placeholder="search"
          type="search"
          autoComplete="on"
        />
        <button className="join-item btn btn-sm">
          <SearchIcon />
          <span className="hidden md:block">Search</span>
        </button>
      </div>
    </div>
  );
}
