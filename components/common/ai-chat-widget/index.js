import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  StyledChatToggle,
  StyledChatWindow,
  StyledChatHeader,
  StyledChatMessages,
  StyledHero,
  StyledCategoryTabs,
  StyledSuggestedList,
  StyledMessage,
  StyledSources,
  StyledTypingIndicator,
  StyledChatInput,
  StyledDisclaimer,
} from "./styled-ai-chat-widget";

const AskAiFabIcon = () => (
  <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#fab_shadow)">
      <rect x="9" y="1" width="56" height="56" rx="6" fill="url(#fab_gradient)" />
      <g clipPath="url(#fab_clip)">
        <path d="M36.7646 18.4102c.079-.2214.3918-.2214.4708 0l2.2998 6.4902c.1762.4971.5673.8882 1.0644 1.0644l6.4902 2.2998c.2214.079.2214.3918 0 .4708l-6.4902 2.2998c-.4971.1762-.8882.5673-1.0644 1.0644l-2.2998 6.4902c-.079.2214-.3918.2214-.4708 0l-2.2998-6.4902c-.1762-.4971-.5673-.8882-1.0644-1.0644l-6.4902-2.2998c-.2214-.079-.2214-.3918 0-.4708l6.4902-2.2998c.4971-.1762.8882-.5673 1.0644-1.0644l2.2998-6.4902Z" stroke="#fff" strokeWidth="1.5" />
        <path d="m48 12.5 1.3081 3.6919L53 17.5l-3.6919 1.3081L48 22.5l-1.3081-3.6919L43 17.5l3.6919-1.3081L48 12.5ZM26 34.5l1.3081 3.6919L31 39.5l-3.6919 1.3081L26 44.5l-1.3081-3.6919L21 39.5l3.6919-1.3081L26 34.5Z" fill="#fff" />
      </g>
    </g>
    <defs>
      <linearGradient id="fab_gradient" x1="63" y1="55.5" x2="11.5" y2="3.5" gradientUnits="userSpaceOnUse">
        <stop offset=".2448" stopColor="#FF6F3D" />
        <stop offset="1" stopColor="#FFB340" />
      </linearGradient>
      <clipPath id="fab_clip">
        <path fill="#fff" d="M21 12.5h32v32H21z" />
      </clipPath>
      <filter id="fab_shadow" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="4" in="SourceAlpha" result="effect1_dropShadow" />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.435294 0 0 0 0 0.239216 0 0 0 0.6 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="3" in="SourceAlpha" result="effect2_dropShadow" />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.435294 0 0 0 0 0.239216 0 0 0 0.3 0" />
        <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

const AskAiInlineIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g clipPath="url(#inline_clip)">
      <path d="M15.7646 5.91016c.079-.22132.3918-.22133.4708 0l2.2998 6.49024c.1762.4971.5673.8882 1.0644 1.0644l6.4902 2.2998c.2214.079.2214.3918 0 .4708l-6.4902 2.2998c-.4971.1762-.8882.5673-1.0644 1.0644l-2.2998 6.4902c-.079.2214-.3918.2214-.4708 0l-2.2998-6.4902c-.1762-.4971-.5673-.8882-1.0644-1.0644l-6.49024-2.2998c-.22132-.079-.22133-.3918 0-.4708l6.49024-2.2998c.4971-.1762.8882-.5673 1.0644-1.0644l2.2998-6.49024Z" stroke="#585A6D" strokeWidth="1.5" />
      <path d="m27 0 1.3081 3.69185L32 5l-3.6919 1.30815L27 10l-1.3081-3.69185L22 5l3.6919-1.30815L27 0ZM5 22l1.30815 3.6919L10 27l-3.69185 1.3081L5 32l-1.30815-3.6919L0 27l3.69185-1.3081L5 22Z" fill="#585A6D" />
    </g>
    <defs>
      <clipPath id="inline_clip">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
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

const SUGGESTED_CATEGORIES = [
  {
    id: "blog",
    labelKey: "AiChatCategoryBlog",
    labelFallback: "Blog",
    prompts: [
      "How to create a pivot table in ONLYOFFICE?",
      "What's new in the latest version 9.4?",
      "How to connect ONLYOFFICE to Moodle?",
      "How to write a macro for the editor?",
    ],
  },
  {
    id: "docs",
    labelKey: "AiChatCategoryDocs",
    labelFallback: "Docs",
    prompts: [
      "How to find who is editing a document?",
      "How to configure JWT for ONLYOFFICE Docs?",
      "What are the white-labeling options?",
      "How do I set up the Document Server on Linux?",
    ],
  },
  {
    id: "news",
    labelKey: "AiChatCategoryNews",
    labelFallback: "News",
    prompts: [
      "Summarize ONLYOFFICE 9.4 in one paragraph",
      "What's new for spreadsheet users in 2026?",
      "Any breaking changes in the Docs API?",
      "When is the next DocSpace release?",
    ],
  },
];

function formatAnswer(text) {
  return text
    .replace(/https?:\/\/(?:www\.)?onlyoffice\.com(\/blog\/[^\s)>\]"]+)/g, "$1")
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
  const [activeCategory, setActiveCategory] = useState(SUGGESTED_CATEGORIES[0].id);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();
  const { t } = useTranslation("common");

  const locale = router.locale || "en";

  const placeholder = t("AiChatPlaceholder");
  const title = t("AiChatTitle");
  const noResults = t("AiChatNoResults");
  const errorMsg = t("AiChatError");
  const sourcesLabel = t("AiChatSources");
  const expandLabel = isExpanded ? t("AiChatCollapse") : t("AiChatExpand");
  const closeLabel = t("AiChatClose");
  const heroHeading = t("AiChatHeroHeading", "How can I help?");
  const heroSubtitle = t(
    "AiChatHeroSubtitle",
    "I've pored over hundreds of articles on our blog and can quickly find instructions, productivity tips, and update news for you."
  );
  const disclaimer = t(
    "AiChatDisclaimer",
    "Answers are generated with AI which can make mistakes."
  );

  const activeCategoryPrompts =
    SUGGESTED_CATEGORIES.find((c) => c.id === activeCategory)?.prompts || [];

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

  const sendQuery = async (query) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = input.trim();
    if (!query || isLoading) return;
    setInput("");
    sendQuery(query);
  };

  const handleSuggestedClick = (query) => {
    if (isLoading) return;
    sendQuery(query);
  };

  return (
    <>
      {isOpen && (
        <StyledChatWindow $expanded={isExpanded}>
          <StyledChatHeader>
            <span className="chat-header-title">
              <AskAiInlineIcon />
              {title}
            </span>
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

          {messages.length === 0 ? (
            <StyledChatMessages as="div">
              <StyledHero>
                <h3 className="hero-heading">{heroHeading}</h3>
                <p className="hero-subtitle">{heroSubtitle}</p>
                <StyledCategoryTabs>
                  {SUGGESTED_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      className={cat.id === activeCategory ? "active" : ""}
                      onClick={() => setActiveCategory(cat.id)}
                      type="button"
                    >
                      {t(cat.labelKey, cat.labelFallback)}
                    </button>
                  ))}
                </StyledCategoryTabs>
                <StyledSuggestedList>
                  {activeCategoryPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      disabled={isLoading}
                      onClick={() => handleSuggestedClick(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </StyledSuggestedList>
              </StyledHero>
              <div ref={messagesEndRef} />
            </StyledChatMessages>
          ) : (
            <StyledChatMessages>
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
          )}

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

          <StyledDisclaimer>{disclaimer}</StyledDisclaimer>
        </StyledChatWindow>
      )}

      <StyledChatToggle
        id="aiChatToggle"
        className={isOpen ? "is-open" : ""}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ask AI (Control+i)"
        aria-keyshortcuts="Control+i"
      >
        {isOpen ? <CloseIcon /> : <AskAiFabIcon />}
      </StyledChatToggle>
    </>
  );
};

export default AiChatWidget;
