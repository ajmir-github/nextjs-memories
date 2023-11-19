import MemoriesList from "@/features/MemoriesList";

export default function Home() {
  return (
    <div className="grid gap-2">
      {/* MemoriesFilter */}
      <MemoriesList />
    </div>
  );
}
