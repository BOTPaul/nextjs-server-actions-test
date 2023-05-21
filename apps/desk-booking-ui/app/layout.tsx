import "./globals.css";

export const metadata = {
  title: "desk.bookit",
  description: "A simple desk booking app",
};

const routes = [
  {
    title: "Locations",
    path: "/locations",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-surface dark:bg-backgroundDark dark:text-surfaceDark min-h-screen">
        <header className="w-full">
          <div className="flex justify-between items-center lg:max-w-screen-lg lg:m-auto m-8 py-4">
            <div className="text-3xl font-thin">Logo</div>
            <nav className="text-xl">
              <ul>
                {routes.map((route) => (
                  <li key={route.path}>
                    <a href={route.path}>{route.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
