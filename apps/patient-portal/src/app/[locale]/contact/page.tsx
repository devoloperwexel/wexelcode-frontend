'use client';

import { useLocale } from 'next-intl';

import ContactDePageContent from './page-content-de';
import ContactEnPageContent from './page-content-en';

export default function ContactPage() {
  const locale = useLocale();
  return locale === 'de' ? <ContactDePageContent /> : <ContactEnPageContent />;
 
}
