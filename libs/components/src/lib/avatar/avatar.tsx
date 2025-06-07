'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn, titleToColor } from '@wexelcode/utils';
import * as React from 'react';

import { Skeleton } from '../../';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type UserAvatarProps = Omit<React.ComponentProps<typeof Avatar>, 'children'> & {
  name?: string;
  profileUrl?: string;
};

const UserAvatar = ({ name, profileUrl, ...rest }: UserAvatarProps) => {
  if (!name) {
    return (
      <Avatar {...rest}>
        <Skeleton className="w-full h-full rounded-full" />
      </Avatar>
    );
  }

  const fallBack = () => {
    const [firstName, lastName] = name.split(' ');
    return `${firstName[0]}${lastName ? lastName[0] : ''}`.toLocaleUpperCase();
  };
console.log(name);

  return (
    <Avatar {...rest}>
      {profileUrl && <AvatarImage alt={name} src={profileUrl} />}
      <AvatarFallback
        className={rest.className}
        style={{
          backgroundColor: titleToColor(name),
        }}
      >
        {fallBack()}
      </AvatarFallback>
    </Avatar>
  );
};
UserAvatar.displayName = 'UserAvatar';

export { Avatar, AvatarFallback, AvatarImage, UserAvatar };
