interface TimeSlotToggleProps {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  onToggle: () => void;
  disabled?: boolean;
  loading: boolean;
}
export function TimeSlotToggle({
  startTime,
  endTime,
  isAvailable,
  onToggle,
  disabled = false,
  loading = false,
}: TimeSlotToggleProps) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-md transition-colors ${
        disabled
          ? 'bg-muted opacity-50 cursor-not-allowed'
          : isAvailable
          ? 'bg-secondary/50'
          : 'bg-muted'
      }`}
    >
      <div className="flex items-center">
        <div
          className={`w-2 h-10 rounded-full mr-3 ${
            disabled
              ? 'bg-gray-400'
              : isAvailable
              ? 'bg-green-500'
              : 'bg-red-500'
          }`}
        />
        <span className="font-medium">
          {startTime} - {endTime}
        </span>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <span className="mr-3 text-sm font-medium text-muted-foreground">
          {disabled ? 'Past' : isAvailable ? 'Available' : 'Off'}
        </span>
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isAvailable}
            onChange={onToggle}
            disabled={disabled || loading}
          />
          <div
            className={`bg-muted w-11 h-6 rounded-full peer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
              disabled
                ? isAvailable
                  ? ' peer-checked:bg-slate-500 peer-checked:after:translate-x-full'
                  : ' bg-slate-500'
                : 'peer-checked:bg-primary peer-checked:after:translate-x-full'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
}
