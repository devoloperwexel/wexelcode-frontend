import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return <div className="container max-w-6xl h-full">{children}</div>;
}
