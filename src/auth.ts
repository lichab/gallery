// src/auth.ts
import { Lucia } from "lucia";
import { adapter } from "./server/db/lucia-adapter";
import { GitHub } from "arctic";
import { env } from "./env";

interface DatabaseUserAttributes {
  githubId: number;
  username: string;
}

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes: DatabaseUserAttributes) => {
    return {
      githubId: attributes.githubId,
      username: attributes.username,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

export const github = new GitHub(
  env.GITHUB_CLIENT_ID,
  env.GITHUB_CLIENT_SECRET,
);
