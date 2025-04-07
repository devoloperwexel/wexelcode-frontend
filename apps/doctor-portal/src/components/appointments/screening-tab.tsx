'use client';

import { Card, CardContent, CardHeader } from '@wexelcode/components';

import { MedicalScreeningView } from '../medical-screening';

interface AppointmentScreeningTabProps {
  id: string;
  userId: string;
}

export function AppointmentScreeningTab({
  id,
  userId,
}: AppointmentScreeningTabProps) {
  return (
    <Card>
      <CardHeader>Medical Screening</CardHeader>
      <CardContent>
        <MedicalScreeningView />
      </CardContent>
    </Card>
  );
}
