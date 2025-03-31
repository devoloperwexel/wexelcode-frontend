export default function PhysioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-6xl py-4 mx-auto">{children}</div>;
}
