'use client';

import { DatePicker, Input } from '@wexelcode/components';
import { useGetDoctors } from '@wexelcode/hooks';

import { DoctorCard } from '../../../components/doctors';

export default function DoctorsPageContent() {
  const { data: response } = useGetDoctors({
    query: 'page=1&limit=10&includes=user',
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <Input placeholder="Search Doctors" className="col-span-3" />
        <DatePicker initialDate={new Date()} />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {response?.data?.results.map((item) => (
          <DoctorCard key={item.id} doctor={item} />
        ))}
      </div>
    </div>
  );
}
