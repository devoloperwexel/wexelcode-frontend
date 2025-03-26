import { NextRequest, NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// import createMiddleware from 'next-intl/middleware';

// import { routing } from './i18n/routing';

// const protectedRoutesRegex = /^\/(en|ar)\/(profile|appointments)(\/.*)?$/;

// const intlMiddleware = createMiddleware(routing);
// const secret = process.env.NEXTAUTH_SECRET;

// export default async function middleware(request: NextRequest) {
//   const response = intlMiddleware(request);

//   const { pathname } = request.nextUrl;

//   const isProtectedRoute = protectedRoutesRegex.test(pathname);

//   if (isProtectedRoute) {
//     const token = await getToken({ req: request, secret });
//     const host = process.env?.['NEXTAUTH_URL'];
//     // For debug
//     console.log(token);

//     if (!token) {
//       const signInUrl = new URL('/api/auth/signin', host);
//       signInUrl.searchParams.set('callbackUrl', `${host}${pathname}`);

//       return NextResponse.redirect(signInUrl);
//     }
//   }

//   return response;
// }

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(de|en)/:path*'],
// };

import { auth } from '@wexelcode/auth';

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
