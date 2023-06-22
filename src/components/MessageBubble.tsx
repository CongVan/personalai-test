import { Message } from "@/types/Message";
import SystemMessage from "./SystemMessage";
import UserMessage from "./UserMessage";

interface MessageBubbleProps extends Message {}

function MessageBubble({ role, content }: MessageBubbleProps) {
  if (role === "user") {
    return <UserMessage role={role} content={content} />;
  }
  return <SystemMessage role={role} content={content} />;
}

export default MessageBubble;
