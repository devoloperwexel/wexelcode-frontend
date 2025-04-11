// TODO: use CMS to mange blog

import { getLocale } from 'next-intl/server';

import HikingBlogDe from './page-content-de';
import HikingBlogEn from './page-content-en';

export default async function BlogPage() {
  const local = await getLocale();
  return <>{local === 'de' ? <HikingBlogDe /> : <HikingBlogEn />}</>;
}
