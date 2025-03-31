import React from 'react';

export default function ProfileLayout({ children }: React.PropsWithChildren) {
  return <div className="max-w-3xl mx-auto py-4">{children}</div>;
}
