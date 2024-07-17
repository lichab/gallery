import { type User } from "lucia";
import AuthButton from "./Login/AuthButton";

export default async function TopNav({ user }: { user: User | null }) {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h2>My Gallery</h2>

      <AuthButton user={user} />
    </nav>
  );
}
