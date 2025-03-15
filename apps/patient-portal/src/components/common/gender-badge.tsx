import { UserIcon } from 'lucide-react';

interface GenderBadgeProps {
  gender: 'MALE' | 'FEMALE';
}
export function GenderBadge({ gender }: GenderBadgeProps) {
  return gender === 'FEMALE' ? (
    <div className="flex justify-evenly items-center bg-pink-100 text-pink-800 rounded-full px-2 py-1">
      <UserIcon size={14} />
      <small>Female</small>
    </div>
  ) : (
    <div className="flex justify-evenly items-center bg-blue-100 text-blue-800 rounded-full px-2 py-1">
      <UserIcon size={14} />
      <small>Male</small>
    </div>
  );
}
