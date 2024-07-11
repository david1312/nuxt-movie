import type { H3Event } from "h3";
import { initSocket } from "~/server/utils/ws";

export default defineEventHandler(async (event: H3Event) => {
  initSocket(event);
});
