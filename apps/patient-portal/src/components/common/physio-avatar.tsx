'use client';

import { UserAvatar } from '@wexelcode/components';
import { Doctor } from '@wexelcode/types';
import React from 'react';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

type Props = React.ComponentProps<typeof UserAvatar> & {
  physio?: Doctor;
};

export function PhysioAvatar({ physio, ...rest }: Props) {
  if (!physio) {
    return <UserAvatar {...rest} />;
  }

  return (
    <Link href={`${Routes.doctors}/${physio.userId}`}>
      <UserAvatar
        {...rest}
        name={`${physio.user.firstName} ${physio.user.lastName}`}
        profileUrl={physio?.user.profilePictureUrl}
      />
    </Link>
  );
}
