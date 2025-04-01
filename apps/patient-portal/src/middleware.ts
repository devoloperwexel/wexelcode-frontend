import { auth } from '@wexelcode/auth';
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default auth(async function middleware(request: NextRequest) {
  // Your custom middleware logic goes here
  const { pathname } = request.nextUrl;
  const protectedRoutesRegex =
    /^\/(en|de)\/(profile|appointments|dashboard)(\/.*)?$/;
  const isProtectedRoute = protectedRoutesRegex.test(pathname);

  if (isProtectedRoute) {
    const host = process.env?.['NEXTAUTH_URL'];

    if (!(request as any).auth) {
      const signInUrl = new URL('/api/auth/signin', host);
      signInUrl.searchParams.set('callbackUrl', `${host}${pathname}`);

      return NextResponse.redirect(signInUrl);
    }
  }

  return intlMiddleware(request);
});

// Match only internationalized pathnames
export const config = {
  matcher: ['/', '/(de|en)/:path*'],
};
