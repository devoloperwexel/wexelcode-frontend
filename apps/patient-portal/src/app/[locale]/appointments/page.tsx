'use client';

import { useLocale } from 'next-intl';

import { QuestionnaireSection } from '../../../components/questions';

export default function AppointmentsPage() {
  const locale = useLocale();

  return <QuestionnaireSection local={locale} gender="male" />;
}
