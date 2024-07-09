export interface ChatMessage {
  message: string;
  username: string;
  timestamp: Date;
}

export interface Rooms {
  [key: string]: ChatMessage[];
}
