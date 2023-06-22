"use client";
import { useChat } from "@/context/chat";
import { Message } from "@/types/Message";
import { FormEventHandler, ReactNode } from "react";

interface InputPromptProps {}

function InputPrompt({}: InputPromptProps) {
  const { setMessages } = useChat();

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const content = formData.get("prompt")?.toString();
    if (!content) {
      return;
    }
    const newsMsg: Message[] = [
      { role: "user", content: content },
      { role: "system", content: content },
    ];
    setMessages((s) => s.concat(newsMsg));
    (e.target as any).reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="prompt"
          className="w-full input rounded-full input-lg input-bordered"
          placeholder="Input question here"
          autoFocus
        />
      </form>
    </>
  );
}

export default InputPrompt;
