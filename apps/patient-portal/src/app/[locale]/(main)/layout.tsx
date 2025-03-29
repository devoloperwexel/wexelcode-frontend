import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center h-full w-full py-4">
      <div className="container flex justify-center max-w-6xl h-full">
        {children}
      </div>
    </div>
  );
}
