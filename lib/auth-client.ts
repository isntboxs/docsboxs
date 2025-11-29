import {
  adminClient,
  anonymousClient,
  multiSessionClient,
  usernameClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { env } from "@/env";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_BACKEND_URL,
  plugins: [
    adminClient(),
    anonymousClient(),
    multiSessionClient(),
    usernameClient(),
  ],
});

export const { signIn, signUp, useSession } = authClient;
