import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedRoutesRegex =
    /^\/(en|de)\/(profile|appointments|dashboard)(\/.*)?$/;
  const isProtectedRoute = protectedRoutesRegex.test(pathname);

  if (isProtectedRoute) {
    const secret = process.env?.['AUTH_SECRET'];
    const session = await getToken({
      req: request,
      secret,
      secureCookie: process.env?.['NODE_ENV'] === 'production',
    });

    if (!session) {
      const host = process.env?.['NEXTAUTH_URL'];
      const signInUrl = new URL('/api/auth/signin', host);
      signInUrl.searchParams.set('callbackUrl', `${host}${pathname}`);
      return Response.redirect(signInUrl);
    }
  }
  return intlMiddleware(request);
}

// Match only internationalized pathnames
export const config = {
  matcher: ['/', '/(de|en)/:path*'],
};
