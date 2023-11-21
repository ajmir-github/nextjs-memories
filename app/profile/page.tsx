import DoubleMainLayout from "@/components/DoubleMainLayout";
import MemoryFilter from "@/features/MemoryFilter";
import MemoriesList from "@/features/MemoryList";
import MemoryCard from "@/features/MemoryList/MemoryCard";
import UserProfile from "@/features/UserProfile";
import { Memory, User } from "@prisma/client";

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

export default function YourProfilePage() {
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
  return (
    <DoubleMainLayout side={<UserProfile user={user} editable={true} />}>
      <div className=" gap-2 md:gap-4 flex flex-col">
        <MemoryFilter />
        <div className=" xl:col-span-2 gap-2 md:gap-4 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {memories.map((memory) => (
            <MemoryCard memory={memory} />
          ))}
        </div>
      </div>
    </DoubleMainLayout>
  );
}
