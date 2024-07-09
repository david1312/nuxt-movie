export const useItem = () => {
  return useState("choosenItem", () => "");
};

export const usernameChat = () => {
  return useState("usernameChat", () => "");
};
