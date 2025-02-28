'use client';

import { DatePicker, Input, Pagination } from '@wexelcode/components';
import { useGetDoctors, useQueryParams } from '@wexelcode/hooks';

import {
  DoctorCard,
  DoctorsLoadingSkeleton,
} from '../../../components/doctors';

export default function DoctorsPageContent() {
  const queryParams = useQueryParams();

  const { data: response, isLoading } = useGetDoctors({
    page: queryParams.getInt('page') || 1,
    limit: queryParams.getInt('limit') || 1,
    includes: ['user'],
  });

  return (
    <div className="flex flex-col justify-between space-y-4 h-full">
      <div className="space-y-6">
        <div className="grid grid-cols-4 gap-4">
          <Input placeholder="Search Doctors" className="col-span-3" />
          <DatePicker initialDate={new Date()} />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {isLoading ? (
            <DoctorsLoadingSkeleton />
          ) : (
            response?.data?.results.map((item) => (
              <DoctorCard key={item.id} doctor={item} />
            ))
          )}
        </div>
      </div>

      <Pagination totalPages={response?.data?.totalPages || 0} />
    </div>
  );
}
