'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

const LocalLink = ({ href, ...rest }: React.ComponentProps<typeof Link>) => {
  const currentLocale = useLocale();
  const localeHref = `/${currentLocale}${href}`;
  return <Link {...rest} href={localeHref} />;
};
LocalLink.displayName = 'LocalLink';

export { LocalLink };
