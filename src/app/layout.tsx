import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { validateRequest } from "~/server/validate-request";
import AuthButton from "./_components/Login/AuthButton";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { lucia } from "~/auth";

export const metadata = {
  title: "Gallery",
  description: "Playing around",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}

async function login(): Promise<never> {
  "use server";
  return redirect("login/github");
}

export interface ActionResult {
  error: string | null;
}

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
