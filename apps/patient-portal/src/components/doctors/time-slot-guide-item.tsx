import { Text } from '@wexelcode/components';
import { cva, VariantProps } from 'class-variance-authority';

const timeSlotGuideItemVariants = cva('w-5 h-5 rounded-md items-baseline', {
  variants: {
    status: {
      available: 'border',
      selected: 'border bg-amber-300',
      unavailable: 'border bg-gray-300',
    },
  },
  defaultVariants: {
    status: 'available',
  },
});

interface TimeSlotGuideItemProps
  extends VariantProps<typeof timeSlotGuideItemVariants> {
  title: string;
}

export default function TimeSlotGuideItem({
  title,
  status,
}: TimeSlotGuideItemProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className={timeSlotGuideItemVariants({ status })}></div>
      <Text>{title}</Text>
    </div>
  );
}
