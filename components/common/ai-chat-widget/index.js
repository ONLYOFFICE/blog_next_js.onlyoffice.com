import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import {
  StyledChatToggle,
  StyledChatWindow,
  StyledChatHeader,
  StyledChatMessages,
  StyledMessage,
  StyledSources,
  StyledTypingIndicator,
  StyledChatInput,
} from "./styled-ai-chat-widget";

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
    <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

function formatAnswer(text) {
  return text
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

const AiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  const locale = router.locale || "en";

  const placeholder = locale === "ru"
    ? "Задайте вопрос о статьях..."
    : "Ask about our articles...";

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = input.trim();
    if (!query || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: query }]);
    setIsLoading(true);

    try {
      const res = await fetch("/blog/api/ai-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, locale }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const contentType = res.headers.get("content-type") || "";

      // Non-streaming response (e.g. no results)
      if (contentType.includes("application/json")) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: data.answer, sources: data.sources || [] },
        ]);
        setIsLoading(false);
        return;
      }

      // SSE streaming response
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiText = "";
      let sources = [];
      let buffer = "";

      setMessages((prev) => [...prev, { role: "ai", content: "", sources: [] }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6);

          try {
            const event = JSON.parse(jsonStr);

            if (event.type === "sources") {
              sources = event.sources;
            } else if (event.type === "text") {
              aiText += event.text;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "ai",
                  content: aiText,
                  sources,
                };
                return updated;
              });
            }
          } catch {
            // skip malformed JSON
          }
        }
      }

      // Final update with sources
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "ai", content: aiText, sources };
        return updated;
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: locale === "ru"
            ? "Произошла ошибка. Попробуйте ещё раз."
            : "An error occurred. Please try again.",
          sources: [],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <StyledChatWindow>
          <StyledChatHeader>
            <span className="chat-header-title">AI Search</span>
            <button
              className="chat-header-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </StyledChatHeader>

          <StyledChatMessages>
            {messages.length === 0 && (
              <StyledMessage className="ai-message">
                {locale === "ru"
                  ? "Привет! Задайте вопрос, и я найду ответ в статьях блога ONLYOFFICE."
                  : "Hi! Ask a question and I'll find the answer in the ONLYOFFICE blog articles."}
              </StyledMessage>
            )}

            {messages.map((msg, i) => (
              <React.Fragment key={i}>
                <StyledMessage className={msg.role === "user" ? "user-message" : "ai-message"}>
                  {msg.role === "ai" ? (
                    <p dangerouslySetInnerHTML={{ __html: formatAnswer(msg.content) }} />
                  ) : (
                    msg.content
                  )}
                </StyledMessage>

                {msg.role === "ai" && msg.sources?.length > 0 && (
                  <StyledSources>
                    <div className="sources-title">
                      {locale === "ru" ? "Источники:" : "Sources:"}
                    </div>
                    {msg.sources.map((src, j) => (
                      <a
                        key={j}
                        className="source-link"
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {src.title}
                      </a>
                    ))}
                  </StyledSources>
                )}
              </React.Fragment>
            ))}

            {isLoading && messages[messages.length - 1]?.role !== "ai" && (
              <StyledTypingIndicator>
                <span /><span /><span />
              </StyledTypingIndicator>
            )}

            <div ref={messagesEndRef} />
          </StyledChatMessages>

          <StyledChatInput onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <SendIcon />
            </button>
          </StyledChatInput>
        </StyledChatWindow>
      )}

      <StyledChatToggle onClick={() => setIsOpen(!isOpen)} aria-label="AI Search">
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </StyledChatToggle>
    </>
  );
};

export default AiChatWidget;
