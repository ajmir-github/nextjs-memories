import DoubleMainLayout from "@/components/DoubleMainLayout";
import MemoryCard from "@/features/MemoryList/MemoryCard";
import MemoryView from "@/features/MemoryView";
import UserProfile from "@/features/UserProfile";
import { Memory, User } from "@prisma/client";

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

const user: User = {
  id: "2313",
  createdAt: new Date(),
  email: "user@gmail.com",
  isAdmin: false,
  name: "Alexandra Haje",
  password: "password",
  updatedAt: new Date(),
  views: 2,
  profile: "/images/profile.jpg",
  bio: "asdasd",
};
export default function SingleMemoryPage({
  params: { memoryId },
}: {
  params: { memoryId: string };
}) {
  const memory = memories.find((memory) => memory.id === memoryId);
  if (!memory) return <h1>Not found!</h1>;
  return (
    <DoubleMainLayout side={<UserProfile user={user} editable={false} />}>
      <div className=" xl:col-span-2 flex flex-col gap-2 md:gap-4">
        <MemoryView memory={memory} />
        {/* related memories */}
        <div className=" gap-2 md:gap-4 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {memories.map((memory) => (
            <MemoryCard memory={memory} />
          ))}
        </div>
      </div>
    </DoubleMainLayout>
  );
}
