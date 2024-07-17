import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import AuthButton from "./components/Login/AuthButton";
import { validateRequest } from "~/server/actions";
import { type User } from "lucia";

export const metadata = {
  title: "Gallery",
  description: "Playing around",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

async function TopNav({ user }: { user: User | null }) {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h2>My Gallery</h2>

      <AuthButton user={user} />
    </nav>
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-2 bg-gray-900 text-red-600">
        <TopNav user={user} />
        {children}
      </body>
    </html>
  );
}
