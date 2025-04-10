import { Text } from '@wexelcode/components';

interface PatientDetailItemProps {
  label: string;
  value: string;
}

export default function PatientDetailItem({
  label,
  value,
}: PatientDetailItemProps) {
  return (
    <div className="flex flex-col">
      <Text variant="muted">{label}:</Text>
      <Text>{value}</Text>
    </div>
  );
}
