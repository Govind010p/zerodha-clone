import { useState, useEffect } from "react";
import { Send, Plus, ChevronDown, Cross } from "lucide-react";
import "../assets/css/chat.css";

export default function ChatBox() {
  const [showContext, setShowContext] = useState(false);
  const [inputData, setInputData] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // const handleInput = ()=>{
  //   setInputData(event.target.value);
  // }

  const starterQuestions = [
    "Analyze my portfolio performance",
    "Compare TCS vs Infosys fundamentals",
    "Find fundamentally strong stocks",
    "Best stocks in renewable energy sector",
  ];

  const placeholders = [
    "Analyze my portfolio performance...",
    "Compare TCS vs Infosys fundamentals...",
    "Find fundamentally strong stocks...",
    "Best stocks in renewable energy...",
    "What is Nifty 50 today?",
  ];

useEffect(() => {
  const interval = setInterval(() => {
    setFade(false); // fade out

    setTimeout(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
      setFade(true); // fade in
    }, 400); // wait for fade out to finish

  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="inner-box d-flex flex-column">
      <div className="chat-header">
        <h6>Market AI Assistant</h6>
      </div>

      <div className="chat-home">
        <div className="welcome-card">
          <h4>How can I help today?</h4>
          <p>
            Ask about stocks, portfolio analysis, company fundamentals, sector
            trends, or investment ideas.
          </p>
        </div>

        <div className="question-grid">
          {starterQuestions.map((question) => (
            <button
              key={question}
              className="question-chip"
              onClick={() => setInputData(question)}
            >
              {question}
            </button>
          ))}
        </div>
        {showContext && (
          <div className="context-menu">
            <button>Add Holding Context</button>
            <button>Add Stock Context</button>
            <button>Add Watchlist Context</button>
            <button>Get Fundamentals</button>
            <button>Add Sector Context</button>
          </div>
        )}
      </div>

      <div className="chat-input-section">
        <div className="context-container">
          <button
            className="context-btn"
            onClick={() => setShowContext(!showContext)}
          >
            <Plus size={16} />
            Add Context
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="input-wrapper">
          <input
            placeholder={placeholders[placeholderIndex]}
            className={fade ? "placeholder-visible" : "placeholder-hidden"}
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="send-btn">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
