import { PropsWithChildren } from 'react';

import { Header } from '../components/header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center w-full h-[calc(100vh-4rem)] p-4 overflow-auto">
        <div className="flex justify-center h-full w-full">{children}</div>
      </div>
    </main>
  );
}
