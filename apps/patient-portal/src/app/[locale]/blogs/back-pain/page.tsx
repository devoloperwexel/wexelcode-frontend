// TODO: use CMS to mange blog

import { getLocale } from 'next-intl/server';

import BackPainBlogDe from './page-content-de';
import BackPainBlogEn from './page-content-en';

export default async function BackPainBlogPage() {
  const local = await getLocale();
  return <>{local === 'de' ? <BackPainBlogDe /> : <BackPainBlogEn />}</>;
}
