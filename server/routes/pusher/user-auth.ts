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

  try {
    const authResponse = await pusher.authenticateUser(body.socket_id, {
      id: body.socket_id,
      user_info: {
        username: body.username,
      },
    });

    return { authResponse };
  } catch (error) {
    console.error("error auth pusher user", error);
    throw error;
  }
});
