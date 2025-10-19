import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { SYSTEM_PROMPT, LEAD_FIELDS, LeadField, SERVICE_SUGGESTIONS } from '../lib/chatbot-context';

type Role = 'user' | 'model' | 'system';

type Message = {
  id: string;
  role: Role;
  content: string;
  createdAt: number;
};

type LeadData = {
  [K in LeadField]?: string;
};

type ChatbotProps = {
  className?: string;
  welcome?: string;
  model?: string; // default: gemini-2.0-flash
};

const DEFAULT_MODEL = 'gemini-2.0-flash';

const formatMessage = (text: string) => {
  return text
    .split('\n')
    .map(line => 
      line
        // Bold text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic text
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Code blocks
        .replace(/`(.*?)`/g, '<code class="px-1 py-0.5 rounded bg-black/30 font-mono text-xs">$1</code>')
    )
    .join('<br />');
};

export default function Chatbot({
  className,
  welcome = 'Hi! Ask me anything about Vyomira.',
  model = DEFAULT_MODEL,
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'system', role: 'system', content: SYSTEM_PROMPT, createdAt: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [leadData, setLeadData] = useState<LeadData>({});
  const [collectingLead, setCollectingLead] = useState<LeadField | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

  const handleLeadCollection = (input: string) => {
    if (!collectingLead) return false;
    
    setLeadData(prev => ({ ...prev, [collectingLead]: input }));
    
    const fields = Object.keys(LEAD_FIELDS) as LeadField[];
    const nextField = fields[fields.indexOf(collectingLead) + 1];
    
    if (nextField) {
      setCollectingLead(nextField);
      addMessage('model', `Please provide your ${LEAD_FIELDS[nextField]}:`);
    } else {
      setCollectingLead(null);
      // Send lead data to backend/email
      console.log('Lead collected:', leadData);
      addMessage('model', 'Thank you for providing your information! Our team will contact you shortly. In the meantime, is there anything specific you\'d like to know about our services?');
    }
    
    return true;
  };
  
  const startLeadCollection = () => {
    setCollectingLead('name');
    addMessage('model', `Please provide your ${LEAD_FIELDS.name}:`);
  };

  function addMessage(role: Role, content: string) {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role, content, createdAt: Date.now() },
    ]);
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Only auto-scroll if user is already near bottom
    const isNearBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight < 100;
    
    if (isNearBottom) {
      scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isSending]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50);
  }, [isOpen]);

  // Initialize Gemini API client
  const genAIRef = useRef<GoogleGenerativeAI | null>(null);
  useEffect(() => {
    if (apiKey) {
      genAIRef.current = new GoogleGenerativeAI(apiKey);
    }
  }, [apiKey]);

  const handleSend = async (userText?: string) => {
    const text = (userText ?? input).trim();
    if (!text) return;

    // Handle lead collection if in progress
    if (collectingLead) {
      handleLeadCollection(text);
      setInput('');
      return;
    }

    if (!apiKey) {
      setError('Missing VITE_GEMINI_API_KEY. Add it to your .env.local and restart.');
      return;
    }

    setError(null);
    setIsSending(true);
    setInput('');
    addMessage('user', text);

    // Check if this is a demo request or contact request
    const isDemoRequest = text.toLowerCase().includes('demo') || text.toLowerCase().includes('pricing');
    const isContactRequest = text.toLowerCase().includes('contact') || text.toLowerCase().includes('talk to');

    if (isDemoRequest || isContactRequest) {
      startLeadCollection();
      setIsSending(false);
      return;
    }

    try {
      if (!genAIRef.current) throw new Error('Gemini client not initialized');
      const modelInstance = genAIRef.current.getGenerativeModel({ model });

      // Include previous context and system prompt
      const history = messages
        .filter(m => m.role !== 'system')
        .slice(-4)
        .map(m => m.content);

      const result = await modelInstance.generateContent([...history, text]);
      const reply = result.response.text() || 'No response.';
      addMessage('model', reply);

      // Check if the response indicates we should collect lead info
      if (reply.toLowerCase().includes('contact') || reply.toLowerCase().includes('demo')) {
        setTimeout(() => startLeadCollection(), 1000);
      }
    } catch (e: any) {
      console.error(e);
      setError(e?.message || 'Failed to get response');
      addMessage('model', 'Sorry, something went wrong. Please try again or contact our support team.');
    } finally {
      setIsSending(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 group"
        aria-label="Open Vyomira Assistant"
      >
        <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow">
          <MessageCircle className="text-white" size={26} />
          <span className="absolute -inset-1 rounded-full blur-md opacity-40 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:opacity-60" />
        </span>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className={[
            'fixed bottom-20 right-5 z-50 flex flex-col w-[92vw] max-w-md h-[70vh] max-h-[680px] rounded-xl border bg-gray-900 border-white/10 shadow-2xl ring-1 ring-white/10 backdrop-blur',
            className || '',
          ].join(' ')}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-950/40 to-cyan-950/30">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="font-semibold text-white">Vyomira Assistant</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-md hover:bg-white/10 text-gray-200"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-gray-100">
            {messages.length <= 1 ? (
              <div className="text-center text-gray-300">
                <p className="mb-3">{welcome}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {SERVICE_SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      className="text-sm px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10"
                      onClick={() => handleSend(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages
                .filter(m => m.role !== 'system')
                .map((m) => (
                <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div
                    className={[
                      'max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm',
                      m.role === 'user'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white/5 text-gray-100 border border-white/10',
                    ].join(' ')}
                    dangerouslySetInnerHTML={{ __html: formatMessage(m.content) }}
                  />
                </div>
              ))
            )}

            {isSending && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-2 text-sm text-gray-200 inline-flex items-center gap-2">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce [animation-delay:-0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce [animation-delay:-0.1s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce" />
                  </span>
                </div>
              </div>
            )}
            {error && (
              <div className="text-xs text-red-300 bg-red-900/20 border border-red-800/40 rounded-md p-2">
                {error}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="px-4 pb-3 space-y-2 border-t border-white/10 bg-gray-900/80">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                className="flex-1 rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={isSending}
              />
              <button
                className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm disabled:opacity-50"
                onClick={() => handleSend()}
                disabled={isSending || input.trim().length === 0}
                title="Send"
              >
                Send
              </button>
              <button
                className="px-3 py-2 rounded-md bg-transparent border border-white/10 text-gray-200 text-sm"
                onClick={handleClear}
                title="Clear chat"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
