import { Text } from '@wexelcode/components';

interface DoctorDetailsTitleProps {
  title: string;
  detail: string;
}

export function DoctorDetailsTitle({ title, detail }: DoctorDetailsTitleProps) {
  return (
    <div className="flex justify-between border-b border-border py-2">
      <Text>{title}</Text>
      <Text variant="muted">{detail}</Text>
    </div>
  );
}
