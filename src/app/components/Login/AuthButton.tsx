"use client";

import { type User } from "lucia";
import { useTransition } from "react";
import { logout, login } from "~/server/actions";

export default function AuthButton({ user }: { user: User | null }) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      if (user) {
        await logout();
        return;
      }

      await login();
    });
  };

  if (isPending) {
    return <div>Loading....</div>;
  }

  return (
    <form action={handleSubmit}>
      <button>{user ? "Logout" : "Login"}</button>
    </form>
  );
}
