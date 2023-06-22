"use client";
import ChatContainer from "@/components/ChatContainer";
import InputPrompt from "@/components/InputPrompt";
import { ChatProvider } from "@/context/chat";
import Image from "next/image";

export default function Home() {
  return (
    <ChatProvider>
      <div className=" max-w-lg mx-auto p-2 h-screen flex flex-col">
        <div className="flex-1">
          <ChatContainer />
        </div>
        <InputPrompt />
      </div>
    </ChatProvider>
  );
}
