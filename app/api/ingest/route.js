import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUdation } from "@/lib/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUdation,
    syncUserDeletion
  ],
});