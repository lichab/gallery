"use client";

import { type User } from "lucia";
import { useTransition } from "react";
import type { ActionResult } from "~/lib/auth";

export default function AuthButton({
  user,
  action,
}: {
  user: User | null;
  action: () => Promise<ActionResult>;
}) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      await action();
    });
  };

  if (isPending) {
    return <div>Loading....</div>;
  }
  if (user) {
    return (
      <form action={handleSubmit}>
        <button>Logout</button>
      </form>
    );
  }

  return (
    <form action={handleSubmit}>
      <button>Log in</button>
    </form>
  );
}
