'use client';

import { Card, CardContent } from '@wexelcode/components';
import React from 'react';

import { MedicalScreeningView } from '../medical-screening';

type PatientScreeningTabProps = React.ComponentProps<
  typeof MedicalScreeningView
>;

export function PatientScreeningTab(props: PatientScreeningTabProps) {
  return (
    <Card>
      <CardContent>
        <MedicalScreeningView {...props} />
      </CardContent>
    </Card>
  );
}
