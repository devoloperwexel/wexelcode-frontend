import { request } from '@wexelcode/utils';

import API from '../../../api/physios';
import DoctorsPageContent from './content';

export default async function DoctorsPage() {
  const response = await request(API.GET_ALL, {
    query: 'page=1&limit=20',
  });
  console.log(response);
  return <DoctorsPageContent />;
}
