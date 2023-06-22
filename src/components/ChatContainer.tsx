import { ReactNode } from "react";
import MessageBubble from "./MessageBubble";
import { useChat } from "@/context/chat";

interface ChatContainerProps {}

function ChatContainer({}: ChatContainerProps) {
  const { messages } = useChat();
  return (
    <div className="">
      {messages.map((s, idx) => (
        <MessageBubble key={idx} {...s} />
      ))}
    </div>
  );
}

export default ChatContainer;
