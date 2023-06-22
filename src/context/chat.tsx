import { Message } from "@/types/Message";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type State = {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

export const ChatContext = createContext<State>({
  messages: [],
  setMessages: () => {},
});

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const state = useContext(ChatContext);
  return state;
}
