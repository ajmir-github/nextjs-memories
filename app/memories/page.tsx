import MemoriesList from "@/features/MemoryList/";
import { Memory } from "@prisma/client";

const memories: Memory[] = [
  {
    id: "memoryId-1",
    caption: "/images/1.jpg",
    body: "Some koso shior her",
    location: "Ayia Napa",
    tags: ["Ayia Napa", "Night life"],
    title: "Nightlife in Cyprus",
    userId: "userId:234234",
    images: [],
    videos: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 10,
  },
  {
    id: "memoryId-2",
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
    id: "memoryId-3",
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
    id: "memoryId-4",
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
    id: "memoryId-5",
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

export default async function Home() {
  return (
    <div className="grid gap-2">
      <MemoriesList memories={memories} />
    </div>
  );
}
