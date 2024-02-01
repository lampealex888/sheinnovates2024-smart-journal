import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/" || path ==="/login" || path === "/signup" || path === "/verifyemail";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// Blocked paths for unlogged users
export const config = {
  matcher: ["/profile", "/login", "/signup", "/verifyemail"],
};
