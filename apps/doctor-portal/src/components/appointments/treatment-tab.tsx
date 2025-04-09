'use client';

import { Card, CardContent, Text } from '@wexelcode/components';

interface AppointmentTreatmentTabProps {
  appointmentId: string;
  patientId: string;
}

export function AppointmentTreatmentTab({
  appointmentId,
  patientId,
}: AppointmentTreatmentTabProps) {
  return (
    <Card>
      <CardContent>
        <Text>Coming soon</Text>
      </CardContent>
    </Card>
  );
}
