'use client';

import { useLocale } from 'next-intl';
import ImprintEnPageContent from './page-content-en';
import ImprintDePageContent from './page-content-de';

export default function ImPrintPage() {
  const locale = useLocale();
  return locale === 'de' ? <ImprintDePageContent /> : <ImprintEnPageContent />;
}
