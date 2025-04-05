import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Read the locale from cookies
  const cookieStore = cookies();
  const locale = (await cookieStore).get('locale')?.value || 'en';

  return {
    locale,
    messages: (await import(`../../languages/${locale}.json`)).default,
  };
});
