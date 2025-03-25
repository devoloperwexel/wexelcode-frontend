import { Text } from '@wexelcode/components';
import { FolderX } from 'lucide-react';
import { ReactNode } from 'react';

interface NoDataBannerProps {
  visible?: boolean;
  icon?: ReactNode;
  message?: string;
}

export function NoDataBanner({
  visible = true,
  message = 'No Data Found',
  icon,
}: NoDataBannerProps) {
  if (!visible) return null;

  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      {!icon && <FolderX size={36} />}
      {icon}
      <Text variant="lead">{message}</Text>
    </div>
  );
}
