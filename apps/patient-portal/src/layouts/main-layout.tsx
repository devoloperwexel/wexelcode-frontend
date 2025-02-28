import { PropsWithChildren } from 'react';

import { Header } from '../components/header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="grid grid-cols-7 h-[calc(100vh-4rem)] overflow-auto">
        <div className="col-start-2 col-span-5 p-4 h-full ">{children}</div>
      </main>
    </div>
  );
}
