'use client';

import { useLocale } from 'next-intl';

import ImprintDePageContent from './page-content-de';
import ImprintEnPageContent from './page-content-en';

export default function ImPrintPage() {
  const locale = useLocale();
  return locale === 'de' ? <ImprintDePageContent /> : <ImprintEnPageContent />;
}
