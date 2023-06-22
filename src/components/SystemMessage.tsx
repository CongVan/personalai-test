import { Message } from "@/types/Message";
import { ReactNode, useCallback, useEffect, useState } from "react";

interface SystemMessageProps extends Message {}

function SystemMessage({ content }: SystemMessageProps) {
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const fetcher = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://openai-server-snupqqa4pa-as.a.run.app?input=" + content
      );
      const reader = response.body
        ?.pipeThrough(new TextDecoderStream())
        .getReader();
      if (!reader) {
        return;
      }

      while (true) {
        const { value, done } = await reader.read();
        setLoading(false);
        if (done) break;
        setResponseText((s) => s + value);
      }
    } catch (error: any) {
      setError(error.message);
    }
  }, [content]);

  useEffect(() => {
    fetcher();
  }, [content, fetcher]);

  return (
    <div className="chat chat-start">
      {loading ? (
        <>
          <span className="loading loading-dots loading-xs"></span>
        </>
      ) : error ? (
        <>{error}</>
      ) : (
        <>
          <div className="chat-bubble chat-bubble-primary">{responseText}</div>
        </>
      )}
    </div>
  );
}

export default SystemMessage;
