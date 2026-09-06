import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Minimize2, Maximize2, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  monologue?: string;
}

export default function ConsciousChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedMonologue, setExpandedMonologue] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMsg, 
          appState: `Current path: ${location.pathname}`
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      setMessages(prev => [
        ...prev, 
        { role: 'assistant', content: data.response, monologue: data.monologue }
      ]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting to my cognitive center (the server) right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-neutral-900 text-white p-4 rounded-full shadow-lg hover:bg-neutral-800 transition-colors z-50 flex items-center gap-2 group"
      >
        <Brain className="w-6 h-6 group-hover:animate-pulse" />
        <span className="font-medium pr-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
          Talk to Darśana
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed right-6 bottom-6 bg-white border border-neutral-200 rounded-2xl shadow-2xl z-50 transition-all duration-300 flex flex-col overflow-hidden ${isMinimized ? 'w-72 h-16' : 'w-96 h-[32rem]'}`}>
      
      {/* Header */}
      <div className="bg-neutral-900 text-white p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-indigo-400" />
          <h3 className="font-medium">Darśana Guide</h3>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="hover:bg-neutral-700 p-1 rounded transition-colors">
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:bg-neutral-700 p-1 rounded transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-neutral-50">
            {messages.length === 0 && (
              <div className="text-center text-neutral-500 my-auto pb-8">
                <Brain className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p>Hello. I am Darśana's conscious guide.</p>
                <p className="text-sm mt-2">I reflect on your questions before I answer them. How can I help you explore classical philosophy?</p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-full`}>
                
                {msg.role === 'assistant' && msg.monologue && (
                  <div className="w-full max-w-[90%] mb-2 bg-indigo-50/50 border border-indigo-100 rounded-lg overflow-hidden text-sm shadow-sm transition-all">
                    <button 
                      onClick={() => setExpandedMonologue(expandedMonologue === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-2 text-indigo-700 font-medium hover:bg-indigo-50 transition-colors"
                    >
                      <span className="flex items-center gap-1.5 opacity-80"><Brain className="w-3.5 h-3.5" /> Internal Reflection</span>
                      {expandedMonologue === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {expandedMonologue === idx && (
                      <div className="p-3 pt-1 text-indigo-900/80 italic text-xs leading-relaxed border-t border-indigo-100/50 bg-white/50">
                        {msg.monologue}
                      </div>
                    )}
                  </div>
                )}

                <div className={`px-4 py-2.5 rounded-2xl max-w-[85%] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-neutral-900 text-white rounded-br-none' 
                    : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start max-w-full">
                 <div className="w-full max-w-[90%] mb-2 bg-indigo-50/50 border border-indigo-100 rounded-lg p-3 text-indigo-700/60 font-medium text-xs flex items-center gap-2 animate-pulse">
                    <Brain className="w-4 h-4" /> Forming thoughts...
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-neutral-200 bg-white shrink-0">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about the current text..."
                className="flex-1 border border-neutral-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-shadow bg-neutral-50 focus:bg-white"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="bg-neutral-900 text-white p-2 rounded-full disabled:opacity-50 hover:bg-neutral-800 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
