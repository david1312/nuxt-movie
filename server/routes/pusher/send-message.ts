import Pusher from "pusher";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const runtimeConfig = useRuntimeConfig();
  const pusher = new Pusher({
    appId: runtimeConfig.PusherAppID,
    key: runtimeConfig.public.PusherKey,
    secret: runtimeConfig.PusherSecret,
    cluster: runtimeConfig.public.PusherCluster,
  });

  console.log({ body, a: "cape woi" });
  const socketId = body.socket_id;
  const channel = body.channel_name;
  const presenceData = {
    user_id: body.username,
    user_info: { name: body.username, another_info: "nuxt3info" },
  };

  try {
    const authResponse = await pusher.trigger("public-netflix", "message", {
      username: "david",
      message: "capek bang asli",
    });
    console.log("asu", authResponse);

    return { authResponse };
  } catch (error) {
    console.error("error auth pusher user", error);
    throw error;
  }
});
