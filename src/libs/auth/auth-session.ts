import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import { authServer } from "~/libs/auth/auth-server";

const getUserFn = createServerFn({ method: "GET" }).handler(async () => {
  const { headers } = getWebRequest()!;
  const session = await authServer.api.getSession({ headers });

  return session?.user || null;
});

export { getUserFn };
