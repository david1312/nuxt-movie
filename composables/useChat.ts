// composables/useChat.ts
import type { ChatState } from "~/types/chat";

export const useChat = () => {
  const chatState = useState<ChatState>("chatState", () =>
    reactive({
      id: "",
      username: "",
      channelName: "",
    })
  );

  const setChatState = (state: ChatState) => {
    chatState.value.id = state.id;
    chatState.value.username = state.username;
    chatState.value.channelName = state.channelName;
  };

  return {
    chatState,
    setChatState,
  };
};
