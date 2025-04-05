import { auth } from '@wexelcode/auth';

export default auth((request: any) => {
  if (!request.auth) {
    const { pathname } = request.nextUrl;
    const host = process.env?.['NEXTAUTH_URL'];
    const signInUrl = new URL('/api/auth/signin', host);
    signInUrl.searchParams.set('callbackUrl', `${host}${pathname}`);
    return Response.redirect(signInUrl);
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
