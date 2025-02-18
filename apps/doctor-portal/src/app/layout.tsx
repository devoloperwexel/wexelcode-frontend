import DashboardLayout from '../layouts/dashboard-layout';
import '@wexelcode/theme';

export const metadata = {
  title: 'Wexelcode',
  description: 'Wexelcode Doctor Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
