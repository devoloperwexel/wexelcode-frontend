import { GetDoctors } from '@wexelcode/api';

import DoctorsPageContent from './content';

export default async function DoctorsPage() {
  try {
    const response = await GetDoctors({ query: 'page=1&limit=10' });
  } catch (error) {
    console.error(error);
  }

  return <DoctorsPageContent />;
}
