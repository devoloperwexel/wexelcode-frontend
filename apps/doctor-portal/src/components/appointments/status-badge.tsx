import { cn, getAppointmentStatus } from '@wexelcode/utils';
import { useTranslations } from 'next-intl';

interface StatusBadgeProps {
  datetime: string;
}

export function StatusBadge({ datetime }: StatusBadgeProps) {
  const t = useTranslations('appointments');

  const status = getAppointmentStatus(datetime);

  return (
    <span
      className={cn(
        'px-3 py-1 text-xs font-medium rounded-full uppercase',
        status === 'upcoming'
          ? 'bg-green-100 text-green-800'
          : 'bg-yellow-100 text-yellow-800'
      )}
    >
      {t(`status.${status}`)}
    </span>
  );
}
