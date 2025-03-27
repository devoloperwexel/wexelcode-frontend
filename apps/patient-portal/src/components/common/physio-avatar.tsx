'use client';

import { UserAvatar } from '@wexelcode/components';
import { User } from '@wexelcode/types';
import React from 'react';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

type Props = React.ComponentProps<typeof UserAvatar> & {
  physioUser?: User;
};

export function PhysioAvatar({ physioUser, ...rest }: Props) {
  if (!physioUser) {
    return <UserAvatar {...rest} />;
  }

  return (
    <Link href={`${Routes.doctors}/${physioUser.id}`}>
      <UserAvatar
        {...rest}
        name={`${physioUser.firstName} ${physioUser.lastName}`}
        profileUrl={physioUser.profilePictureUrl}
      />
    </Link>
  );
}
