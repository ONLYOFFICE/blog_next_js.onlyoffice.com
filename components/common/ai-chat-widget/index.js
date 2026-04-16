import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
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
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
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

const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const CollapseIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

function formatAnswer(text) {
  return text
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Fallback: convert bare /blog/... URLs to clickable links
    .replace(/(?<!href=")(\/blog\/[^\s<>"]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
}

const AiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();
  const { t } = useTranslation("common");

  const locale = router.locale || "en";

  const placeholder = t("AiChatPlaceholder");
  const title = t("AiChatTitle");
  const welcome = t("AiChatWelcome");
  const noResults = t("AiChatNoResults");
  const errorMsg = t("AiChatError");
  const sourcesLabel = t("AiChatSources");
  const expandLabel = isExpanded ? t("AiChatCollapse") : t("AiChatExpand");
  const closeLabel = t("AiChatClose");

  const buildErrorMessage = async (response) => {
    if (response.status === 429) {
      let retryAfter = parseInt(response.headers.get("Retry-After"), 10);
      if (!retryAfter || Number.isNaN(retryAfter)) {
        try {
          const data = await response.json();
          retryAfter = data?.retryAfter || 60;
        } catch {
          retryAfter = 60;
        }
      }
      return t("AiChatRateLimit", { seconds: retryAfter });
    }

    if (response.status === 400) {
      try {
        const data = await response.json();
        if (data?.reason === "tooShort") {
          return t("AiChatTooShort", { min: data.minLength });
        }
        if (data?.reason === "tooLong") {
          return t("AiChatTooLong", { max: data.maxLength });
        }
      } catch {
        // fall through
      }
    }

    return errorMsg;
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        const message = await buildErrorMessage(res);
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: message, sources: [] },
        ]);
        setIsLoading(false);
        return;
      }

      const contentType = res.headers.get("content-type") || "";

      // Non-streaming response (e.g. no results)
      if (contentType.includes("application/json")) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content: data.empty ? noResults : data.answer,
            sources: data.sources || [],
          },
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
          content: errorMsg,
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
        <StyledChatWindow $expanded={isExpanded}>
          <StyledChatHeader>
            <span className="chat-header-title">{title}</span>
            <div className="chat-header-actions">
              <button
                className="chat-header-button chat-header-expand"
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-label={expandLabel}
                title={expandLabel}
              >
                {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
              </button>
              <button
                className="chat-header-button"
                onClick={() => setIsOpen(false)}
                aria-label={closeLabel}
                title={closeLabel}
              >
                <CloseIcon />
              </button>
            </div>
          </StyledChatHeader>

          <StyledChatMessages>
            {messages.length === 0 && (
              <StyledMessage className="ai-message">
                {welcome}
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
                      {sourcesLabel}
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

      <StyledChatToggle
        id="aiChatToggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ask AI (Control+i)"
        aria-keyshortcuts="Control+i"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </StyledChatToggle>
    </>
  );
};

export default AiChatWidget;
