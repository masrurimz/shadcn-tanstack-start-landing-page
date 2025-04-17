import { createAPIFileRoute } from "@tanstack/react-start/api";
import { authServer } from "~/libs/auth/auth-server";

export const APIRoute = createAPIFileRoute("/api/auth/$")({
  GET: ({ request }) => {
    return authServer.handler(request);
  },
  POST: ({ request }) => {
    return authServer.handler(request);
  },
});
