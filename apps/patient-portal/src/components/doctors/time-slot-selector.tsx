import { Text } from '@wexelcode/components';
import { twMerge } from 'tailwind-merge';

interface TimeSlotSelectorProps {
  start: string;
  end: string;
  isSelected: boolean;
  available: boolean;
  onSelect: (start: string) => void;
}

export default function TimeSlotSelector({
  start,
  end,
  available,
  isSelected,
  onSelect,
}: TimeSlotSelectorProps) {
  const handleClick = () => {
    if (available && !isSelected) {
      onSelect(start);
    }
  };

  return (
    <div
      className={twMerge(
        'flex justify-center border p-2 rounded-md cursor-pointer',
        isSelected ? 'bg-amber-300' : '',
        !available ? 'bg-gray-300 cursor-not-allowed' : '',
        !isSelected && available ? 'hover:bg-amber-300' : ''
      )}
      onClick={handleClick}
    >
      <Text>
        {start} - {end}
      </Text>
    </div>
  );
}
