// TODO: use CMS to mange blog

import { getLocale } from 'next-intl/server';

import PhysiotherapyBlogDe from './page-content-de';
import PhysiotherapyBlogEn from './page-content-en';

export default async function BlogPage() {
  const local = await getLocale();
  return (
    <>{local === 'de' ? <PhysiotherapyBlogDe /> : <PhysiotherapyBlogEn />}</>
  );
}
