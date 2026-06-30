import { useState, useEffect, useRef } from "react";
import { 
  Send, 
  Plus, 
  Trash2, 
  Minus, 
  Sparkles, 
  X, 
  Briefcase, 
  GitCompare, 
  Filter, 
  Sun, // Replaced SolarPanel with a more universally stable fallback
  Eye, 
  FileText, // Replaced ReportAnalytics
  Network, // Replaced Sitemap
  Newspaper // Replaced News
} from "lucide-react";

export default function ChatBox() {
  const [showContext, setShowContext] = useState(false);
  const [inputData, setInputData] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [messages, setMessages] = useState([]);
  const [activeContexts, setActiveContexts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const contextMenuRef = useRef(null);
  const addBtnRef = useRef(null);
  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);

  const placeholders = [
    "Ask about markets…",
    "Analyze TCS fundamentals…",
    "What is Nifty 50 today?",
    "Compare sector performance…",
    "Show top gainers today…"
  ];

  // Map icons safely
  const getContextIcon = (label) => {
    switch(label) {
      case "Portfolio": return <Briefcase size={12} />;
      case "Watchlist": return <Eye size={12} />;
      case "Fundamentals": return <FileText size={12} />;
      case "Sector": return <Network size={12} />;
      case "News": return <Newspaper size={12} />;
      default: return <Plus size={12} />;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        contextMenuRef.current && !contextMenuRef.current.contains(event.target) &&
        addBtnRef.current && !addBtnRef.current.contains(event.target)
      ) {
        setShowContext(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [inputData]);

  const setQuickInput = (text) => {
    setInputData(text);
    textareaRef.current?.focus();
  };

  const addContext = (label) => {
    if (activeContexts.some((c) => c.label === label)) {
      setShowContext(false);
      return;
    }
    setActiveContexts((prev) => [...prev, { label }]);
    setShowContext(false);
  };

  const removeContext = (label) => {
    setActiveContexts((prev) => prev.filter((c) => c.label !== label));
  };

  const clearChat = () => {
    setMessages([]);
    setHistory([]);
    setActiveContexts([]);
  };

  const getTime = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const sendMessage = async () => {
    if (!inputData.trim() || loading) return;

    const userQuery = inputData.trim();
    const currentTime = getTime();
    const contextNote = activeContexts.length > 0
      ? `\n\n[Context attached: ${activeContexts.map(c => c.label).join(", ")}]`
      : '';

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userQuery, time: currentTime },
    ]);

    setInputData("");
    setLoading(true);
    setShowContext(false);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userQuery + contextNote,
          history, 
        }),
      });

      const data = await response.json();
      const aiReply = data.reply || "No response received.";
      
      setMessages((prev) => [
        ...prev,
        { role: "model", text: aiReply, time: getTime() },
      ]);

      setHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text: userQuery + contextNote }] },
        { role: "model", parts: [{ text: aiReply }] },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Connection error. Check your API backend and try again.", time: getTime() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="chat-panel">
        
        <div className="chat-header">
          <div className="header-left">
            <div className={`ai-dot ${loading ? "thinking" : "ready"}`}></div>
            <div>
              <div className="header-title">Market AI</div>
              <div className="header-subtitle">{loading ? "Thinking…" : "Ready to help"}</div>
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-btn" title="Clear chat" onClick={clearChat}>
              <Trash2 size={15} />
            </button>
            <button className="icon-btn" title="Minimize">
              <Minus size={1} />
            </button>
          </div>
        </div>

        <div className="chat-body">
          {messages.length === 0 && (
            <>
              <div className="welcome">
                <div className="welcome-icon">
                  <Briefcase size={20} style={{ color: "var(--text-accent)" }} />
                </div>
                <h4>How can I help today?</h4>
                <p>Ask about stocks, portfolio performance,<br />fundamentals, or sector trends.</p>
              </div>

              <div className="chips">
                <button className="chip" onClick={() => setQuickInput("Analyze my portfolio performance")}>
                  <Briefcase size={14} /> Analyze my portfolio performance
                </button>
                <button className="chip" onClick={() => setQuickInput("Compare TCS vs Infosys fundamentals")}>
                  <GitCompare size={14} /> Compare TCS vs Infosys fundamentals
                </button>
                <button className="chip" onClick={() => setQuickInput("Find fundamentally strong stocks")}>
                  <Filter size={14} /> Find fundamentally strong stocks
                </button>
                <button className="chip" onClick={() => setQuickInput("Best stocks in renewable energy")}>
                  <Sun size={14} /> Best stocks in renewable energy
                </button>
              </div>
            </>
          )}

          <div id="messagesArea">
            {messages.map((msg, index) => {
              const isUser = msg.role === "user";
              return (
                <div key={index} className={`msg-row ${isUser ? "user" : ""}`}>
                  <div className={`avatar ${!isUser ? "ai" : ""}`}>
                    {isUser ? "U" : <Sparkles size={12} />}
                  </div>
                  <div>
                    <div 
                      className={`bubble ${isUser ? "user" : "ai"}`}
                      dangerouslySetInnerHTML={{
                        __html: (msg.text || "")
                          .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\n/g, '<br>')
                      }}
                    />
                    <span className={`bubble-time ${isUser ? "user" : ""}`}>{msg.time}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {loading && (
            <div className="msg-row">
              <div className="avatar ai">
                <Sparkles size={12} />
              </div>
              <div className="typing-bubble">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showContext && (
          <div className="context-menu" ref={contextMenuRef}>
            <div className="ctx-header">ADD CONTEXT</div>
            <button className="ctx-item" onClick={() => addContext("Portfolio")}><Briefcase size={15} /> My holdings</button>
            <button className="ctx-item" onClick={() => addContext("Watchlist")}><Eye size={15} /> My watchlist</button>
            <div className="ctx-divider"></div>
            <button className="ctx-item" onClick={() => addContext("Fundamentals")}><FileText size={15} /> Get fundamentals</button>
            <button className="ctx-item" onClick={() => addContext("Sector")}><Network size={15} /> Sector context</button>
            <button className="ctx-item" onClick={() => addContext("News")}><Newspaper size={15} /> Latest news</button>
          </div>
        )}

        <div className="chat-footer">
          {activeContexts.length > 0 && (
            <div className="context-tags">
              {activeContexts.map((c) => (
                <div key={c.label} className="ctx-tag">
                  {getContextIcon(c.label)}
                  {c.label}
                  <button onClick={() => removeContext(c.label)} title={`Remove ${c.label}`}>
                    <X size={11} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="input-row">
            <button 
              className="add-btn" 
              ref={addBtnRef} 
              onClick={() => setShowContext(!showContext)} 
              title="Add context"
            >
              <Plus size={14} />
              Context
            </button>
            <textarea
              ref={textareaRef}
              className={`input-box ${fade ? "placeholder-fade" : "placeholder-fade hidden"}`}
              rows={1}
              placeholder={inputData ? "" : placeholders[placeholderIndex]}
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <button 
              className="send-btn" 
              onClick={sendMessage} 
              title="Send" 
              disabled={!inputData.trim() || loading}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>
  );
}