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

  const socketId = body.socket_id;
  const channel = body.channel_name;
  const presenceData = {
    user_id: body.username,
    user_info: { name: body.username, another_info: "nuxt3info" },
  };

  try {
    const authResponse = pusher.authorizeChannel(
      socketId,
      channel,
      presenceData
    );

    return { authResponse };
  } catch (error) {
    console.error("error auth pusher user", error);
    throw error;
  }
});
