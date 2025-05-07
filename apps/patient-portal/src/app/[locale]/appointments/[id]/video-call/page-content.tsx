'use client';

import '@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css';

import uitoolkit, { SuspensionViewValue } from '@zoom/videosdk-ui-toolkit';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';

type Props = {
  appointmentId: string;
  token: string;
};

function ZoomVideoCallPageView({ appointmentId, token }: Readonly<Props>) {
  const language = useLocale();

  const { data } = useSession();
  let sessionContainer: HTMLDivElement | null = null;

  const user = data?.user;
  function joinSession() {
    if (sessionContainer) {
      const config = {
        videoSDKJWT: token,
        userName: `${user?.firstName} ${user?.lastName}`,
        sessionName: appointmentId,
        language,
        featuresOptions: {
          invite: {
            enable: false,
          },
          leave: {
            enable: true,
          },
          video: {
            enable: true,
            enforceMultipleVideos: true,
          },
          settings: {
            enable: false,
          },
          feedback: {
            enable: false,
          },
          viewMode: {
            enable: true,
            defaultViewMode: 'speaker' as SuspensionViewValue,
            viewModes: [
              'speaker' as SuspensionViewValue,
              'gallery' as SuspensionViewValue,
            ],
          },
        },
      };
      uitoolkit.joinSession(sessionContainer, config);
      sessionContainer && uitoolkit.onSessionClosed(sessionClosed);
    }
  }

  const sessionClosed = () => {
    sessionContainer && uitoolkit.closeSession(sessionContainer);
    window.location.href = window.location.pathname.replace('video-call', '');
  };

  useEffect(() => {
    if (!data?.user) {
      return;
    }
    sessionContainer = document.getElementById(
      'sessionContainer'
    ) as HTMLDivElement;
    joinSession();
  }, [data]);

  return (
    <div className=" flex justify-center h-screen">
      <div
        id="sessionContainer"
        style={{
          width: '100%',
          height: '100%',
        }}
      ></div>
    </div>
  );
}

export default ZoomVideoCallPageView;
