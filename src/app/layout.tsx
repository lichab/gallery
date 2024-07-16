import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import AuthButton from "./components/Login/AuthButton";
import { login, logout, validateRequest } from "~/lib/auth";

export const metadata = {
  title: "Gallery",
  description: "Playing around",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

async function TopNav() {
  const { user } = await validateRequest();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h2>My Gallery</h2>

      <AuthButton user={user} action={user ? logout : login} />
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-2 bg-red-50">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
