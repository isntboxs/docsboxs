export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh items-center px-4 py-16 md:py-32">
      <main className="m-auto h-full w-full max-w-92">{children}</main>
    </div>
  );
}
