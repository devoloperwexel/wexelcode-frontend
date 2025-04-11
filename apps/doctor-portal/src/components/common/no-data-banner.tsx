import { Text } from '@wexelcode/components';
import { cn } from '@wexelcode/utils';
import { FolderX } from 'lucide-react';
import { ReactNode } from 'react';

interface NoDataBannerProps {
  visible?: boolean;
  icon?: ReactNode;
  footer?: ReactNode;
  message?: string;
  className?: string;
}

export function NoDataBanner({
  visible = true,
  message = 'No Data Found',
  icon,
  footer,
  className,
}: NoDataBannerProps) {
  if (!visible) return null;

  return (
    <div
      className={cn(
        'flex flex-col space-y-4 items-center justify-center',
        className
      )}
    >
      {!icon && <FolderX size={36} />}
      {icon}
      <Text variant="lead">{message}</Text>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}
