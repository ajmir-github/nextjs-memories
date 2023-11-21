import { User } from "@prisma/client";

const cache = new Map<string, User>([]);

export default cache;
