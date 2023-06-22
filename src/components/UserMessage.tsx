import { Message } from "@/types/Message";
import { ReactNode } from "react";

interface UserMessageProps extends Message {}

function UserMessage({ content }: UserMessageProps) {
  return (
    <div className="chat chat-end">
      <div className=" chat-bubble">{content}</div>
    </div>
  );
}

export default UserMessage;
