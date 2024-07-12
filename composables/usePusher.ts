import Pusher from "pusher";

export const usePusher = (): any => {
  const runtimeConfig = useRuntimeConfig();

  const pusher = new Pusher({
    appId: runtimeConfig.PusherAppID,
    key: runtimeConfig.public.PusherKey,
    secret: runtimeConfig.PusherSecret,
    cluster: runtimeConfig.public.PusherCluster,
  });

  return pusher;
};
