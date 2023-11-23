import DoubleMainLayout from "@/components/DoubleMainLayout";
import MemoryFilter from "@/features/MemoryListFilter";
import MemoriesList from "@/features/MemoryList";
import UserProfile from "@/features/UserProfile";
import { Memory, User } from "@prisma/client";
import UserProfileSlef from "@/features/UserProfileSelf";

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

export default function ProfileSelfPage() {
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
    <DoubleMainLayout side={<UserProfileSlef user={user} />}>
      <div className=" gap-2 md:gap-4 flex flex-col">
        <MemoryFilter />
        <MemoriesList memories={memories} />
      </div>
    </DoubleMainLayout>
  );
}
