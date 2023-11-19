import { LoadMoreIcon } from "@/components/Icons";
import MemoryFilter from "@/features/MemoryFilter";
import MemoriesList from "@/features/MemoryList";
import { Memory } from "@prisma/client";

const memories: Memory[] = [
  {
    id: "memoryId:1",
    caption: "/images/1.jpg",
    body: "asdasd",
    location: "Ayia Napa",
    tags: [],
    title: "Nightlife in Cyprus",
    userId: "userId:234234",
    images: [],
    videos: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 10,
  },
  {
    id: "memoryId:2",
    caption: "/images/2.jpg",
    body: "asdasd",
    location: "Ayia Napa",
    tags: [],
    title: "Nightlife in Cyprus",
    userId: "userId:234234",
    images: [],
    videos: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 10,
  },
  {
    id: "memoryId:3",
    caption: "/images/3.jpg",
    body: "asdasd",
    location: "Ayia Napa",
    tags: [],
    title: "Nightlife in Cyprus",
    userId: "userId:234234",
    images: [],
    videos: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 10,
  },
  {
    id: "memoryId:4",
    caption: "/images/4.jpg",
    body: "asdasd",
    location: "Ayia Napa",
    tags: [],
    title: "Nightlife in Cyprus",
    userId: "userId:234234",
    images: [],
    videos: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 10,
  },
  {
    id: "memoryId:5",
    caption: "/images/5.jpg",
    body: "asdasd",
    location: "Ayia Napa",
    tags: [],
    title: "Nightlife in Cyprus",
    userId: "userId:234234",
    images: [],
    videos: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 10,
  },
];
export default function Home() {
  return (
    <div className="grid gap-2">
      <MemoryFilter />
      <MemoriesList memories={memories} />
    </div>
  );
}
