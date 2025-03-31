import { PropsWithChildren } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
