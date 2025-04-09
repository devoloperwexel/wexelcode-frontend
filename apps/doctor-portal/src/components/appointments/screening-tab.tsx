'use client';

import { Card, CardContent } from '@wexelcode/components';
import React from 'react';

import { MedicalScreeningView } from '../medical-screening';

type AppointmentScreeningTabProps = React.ComponentProps<
  typeof MedicalScreeningView
>;

export function AppointmentScreeningTab(props: AppointmentScreeningTabProps) {
  return (
    <Card>
      <CardContent>
        <MedicalScreeningView {...props} />
      </CardContent>
    </Card>
  );
}
