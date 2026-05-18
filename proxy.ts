// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/"];

export async function proxy(request: NextRequest) {
     // const { pathname } = request.nextUrl;
     // const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
     // try {
     //      const response = await fetch(
     //           `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
     //           {
     //                method: "GET",
     //                credentials: "include",
     //           }
     //      );

     //      if (response.ok) {
     //           if (isPublicRoute) {
     //                return NextResponse.redirect(
     //                     new URL("/dashboard", request.url)
     //                );
     //           }

     //           return NextResponse.next();
     //      }

     //      if (!isPublicRoute) {
     //           return NextResponse.redirect(new URL("/", request.url));
     //      }

     //      return NextResponse.next();
     // } catch (error) {
     //      if (!isPublicRoute) {
     //           return NextResponse.redirect(new URL("/", request.url));
     //      }

     //      return NextResponse.next();
     // }
}

export const config = {
     // matcher: [
     //      "/",
     //      "/dashboard/:path*",
     // ],
};