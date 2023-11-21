import { NextResponse } from "next/server";
import cache from "./cache";
import { TokenCookieKey } from "./constants";
import database from "./prisma";
import { verifyToken } from "./utils/auth";

export default async function middleware(request: NextResponse) {
  //  check if the user has token
  const hasToken = request.cookies.has(TokenCookieKey);
  if (!hasToken) return;
  // verify the token
  const token = request.cookies.get(TokenCookieKey)?.value as string;
  try {
    const userId = verifyToken(token);
    const user = await database.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (user) cache.set(token, user);
  } catch (error) {
    return;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|images|_next/static|_next/image|favicon.ico).*)",
  ],
};
