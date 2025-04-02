import { auth } from '@wexelcode/auth';
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const authMiddleware = auth((request: NextRequest) => {
  return intlMiddleware(request);
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedRoutesRegex =
    /^\/(en|de)\/(profile|appointments|dashboard)(\/.*)?$/;
  const isProtectedRoute = protectedRoutesRegex.test(pathname);

  if (isProtectedRoute) {
    return (authMiddleware as any)(request);
  } else {
    return intlMiddleware(request);
  }
}

// Match only internationalized pathnames
export const config = {
  matcher: ['/', '/(de|en)/:path*'],
};
