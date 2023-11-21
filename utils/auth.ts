import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.AUTH_SECRET || "secret-key";

export function signToken(userId: string) {
  return jwt.sign(userId, secret);
}

export function verifyToken(token: string) {
  return jwt.verify(token, secret) as string;
}

export function hashString(value: string) {
  return bcryptjs.hashSync(value);
}

export function matchHash(hash: string, value: string) {
  return bcryptjs.compareSync(value, hash);
}
