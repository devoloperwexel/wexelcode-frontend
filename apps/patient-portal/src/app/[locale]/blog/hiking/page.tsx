// TODO: use CMS to mange blog

import { getLocale } from 'next-intl/server';
import HikingBlogEn from './page-content-en';
import HikingBlogDe from './page-content-de';

export default async function BlogPage() {
  const local = await getLocale();
  return <>{local === 'de' ? <HikingBlogDe /> : <HikingBlogEn />}</>;
}
