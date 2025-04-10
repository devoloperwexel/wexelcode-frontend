'use client';

import { useLocale } from 'next-intl';
import PrivacyDePageContent from './page-content-de';
import PrivacyEnPageContent from './page-content-en';

export default function PrivacyPage() {
  const locale = useLocale();
  return locale === 'de' ? <PrivacyDePageContent /> : <PrivacyEnPageContent />;
}
