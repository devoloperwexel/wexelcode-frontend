'use client';

import { useLocale } from 'next-intl';

import TermsDePageContent from './page-content-de';
import TermsEnPageContent from './page-content-en';

export default function TermsPage() {
  const locale = useLocale();
  return locale === 'de' ? <TermsDePageContent /> : <TermsEnPageContent />;
}
