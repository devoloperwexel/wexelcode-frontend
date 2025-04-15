import { GetZoomToken } from '@wexelcode/api';
import { auth } from '@wexelcode/auth';
import { notFound } from 'next/navigation';
import React from 'react';

import ZoomVideoCallPageView from './page-content';

interface AppointmentDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const VideoCallPage = async ({ params }: AppointmentDetailsPageProps) => {
  const [session, { id: appointmentId }] = await Promise.all([auth(), params]);

  try {
    const zoomTokenResponse = await GetZoomToken({
      appointmentId,
      userId: session.user.id,
    });
    return (
      <ZoomVideoCallPageView
        appointmentId={appointmentId}
        token={zoomTokenResponse!.data.token}
      />
    );
  } catch (_error) {
    // redirect 404 page
    notFound();
  }
};

export default VideoCallPage;
