export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>layout de gestion comerciale {children}</div>
  );
}