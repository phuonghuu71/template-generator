import Header from "@/components/Header";

function MainLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="overflow-y-auto flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
