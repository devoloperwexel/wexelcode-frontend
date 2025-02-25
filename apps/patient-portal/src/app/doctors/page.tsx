import { DatePicker, Input } from '@wexelcode/components';

import { DoctorCard } from '../../components/doctors';

export default function DoctorsPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <Input placeholder="Search Doctors" className="col-span-3" />
        <DatePicker initialDate={new Date()} />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <DoctorCard key={index} />
        ))}
      </div>
    </div>
  );
}
