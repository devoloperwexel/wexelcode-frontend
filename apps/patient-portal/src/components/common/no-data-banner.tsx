import { Text } from '@wexelcode/components';
import { FolderX } from 'lucide-react';
import { ReactNode } from 'react';

interface NoDataBannerProps {
  icon?: ReactNode;
  message?: string;
}

export function NoDataBanner({
  message = 'No Data Found',
  icon,
}: NoDataBannerProps) {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-full">
      {!icon && <FolderX size={36} />}
      {icon}
      <Text variant="lead">{message}</Text>
    </div>
  );
}
