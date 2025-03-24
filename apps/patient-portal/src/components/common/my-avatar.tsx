'use client';

import { UserAvatar } from '@wexelcode/components';
import { useSession } from 'next-auth/react';
import React from 'react';

type Props = React.ComponentProps<typeof UserAvatar>;

export function MyAvatar(props: Props) {
  const { data } = useSession();

  return (
    <UserAvatar
      {...props}
      name={data ? `${data.user.firstName} ${data.user.lastName}` : undefined}
      profileUrl={data?.user.profilePictureUrl}
    />
  );
}
