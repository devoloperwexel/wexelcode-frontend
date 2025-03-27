import { auth } from '@wexelcode/auth';
import { NextRequest, NextResponse } from 'next/server';

export default auth(async function middleware(request: NextRequest) {
  // Your custom middleware logic goes here
  const { pathname } = request.nextUrl;
  const protectedRoutesRegex = /^\/(en|ar)\/(profile|appointments)(\/.*)?$/;
  const isProtectedRoute = protectedRoutesRegex.test(pathname);

  if (isProtectedRoute) {
    const host = process.env?.['NEXTAUTH_URL'];

    if (!(request as any).auth) {
      const signInUrl = new URL('/api/auth/signin', host);
      signInUrl.searchParams.set('callbackUrl', `${host}${pathname}`);

      return NextResponse.redirect(signInUrl);
    }
  }
});

// Match only internationalized pathnames
export const config = {
  matcher: ['/', '/(de|en)/:path*'],
};
