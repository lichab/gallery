import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { validateRequest } from "~/server/actions";
import TopNav from "./components/TopNav";

export const metadata = {
  title: "Gallery",
  description: "Playing around",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

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
