import { Text } from '@wexelcode/components';
import { AwardIcon } from 'lucide-react';

interface ExperienceBadgeProps {
  experience: number;
}

export function ExperienceBadge({ experience }: ExperienceBadgeProps) {
  return (
    <div className="flex items-center space-x-1">
      <AwardIcon size={18} />
      <Text variant="muted">{experience} years</Text>
    </div>
  );
}
