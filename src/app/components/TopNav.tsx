"use client";

import { type User } from "lucia";
import AuthButton from "./Login/AuthButton";
import { UploadButton } from "~/lib/auth/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav({ user }: { user: User | null }) {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h2>My Gallery</h2>

      {user && (
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={() => {
            router.refresh();
          }}
        />
      )}
      <AuthButton user={user} />
    </nav>
  );
}
